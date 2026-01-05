import gsap from "gsap";
import { useEffect, useRef, type MutableRefObject } from "react";

export default function useCarousel({
  carouselActive,
  activeIndex,
  setActiveIndex,
  containerRef,
}: {
  carouselActive: boolean;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  containerRef: MutableRefObject<HTMLElement | null>;
}) {
  const isDragging = useRef(false);
  const hasDragged = useRef(false);

  useEffect(() => {
    if (!carouselActive) return;

    const items = gsap.utils.toArray<HTMLElement>(".cardItem");
    const total = items.length;

    const positionCards = (index: number) => {
      items.forEach((item, i) => {
        let diff = i - index;
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;

        gsap.to(item, {
          x:
            innerWidth < 450
              ? diff * 70
              : innerWidth < 700
              ? diff * 20
              : diff * 260,
          y: 0,
          scale: diff === 0 ? 1 : 0.9,
          opacity: Math.abs(diff) > 1 ? 0 : 1,
          zIndex: diff === 0 ? 40 : 10,
          duration: 0.6,
          ease: "power2.out",
        });
      });
    };

    positionCards(activeIndex);

    let startX = 0;
    let currentX = 0;

    const onDragStart = (e: Event) => {
      const event = e as MouseEvent | TouchEvent;
      const target = event.target as HTMLElement;
      if (!target.closest(".cardItem")) return;
      isDragging.current = true;
      hasDragged.current = false;

      startX = event.type.includes("touch")
        ? (event as TouchEvent).touches[0].clientX
        : (event as MouseEvent).clientX;
      currentX = startX;
    };

    const onDragMove = (e: Event) => {
      if (!isDragging.current) return;
      const event = e as MouseEvent | TouchEvent;
      const target = event.target as HTMLElement;
      if (!target.closest(".cardItem")) return;

      event.preventDefault();
      hasDragged.current = true;

      document.body.style.userSelect = "none";
      document.body.style.cursor = "grabbing";

      currentX = event.type.includes("touch")
        ? (event as TouchEvent).touches[0].clientX
        : (event as MouseEvent).clientX;
      const diff = currentX - startX;

      items.forEach((item, i) => {
        let pos = i - activeIndex;
        if (pos > total / 2) pos -= total;
        if (pos < -total / 2) pos += total;

        gsap.set(item, {
          x: pos * 260 + diff,
        });
      });
    };

    const onDragEnd = () => {
      if (!isDragging.current) return;

      isDragging.current = false;
      document.body.style.userSelect = "";
      document.body.style.cursor = "default";

      const diff = currentX - startX;
      const threshold = 120;

      if (diff > threshold) {
        setActiveIndex((i) => (i - 1 + total) % total);
      } else if (diff < -threshold) {
        setActiveIndex((i) => (i + 1) % total);
      } else {
        positionCards(activeIndex);
      }

      setTimeout(() => {
        hasDragged.current = false;
      }, 100);
    };

    const onCardClick = (e: Event) => {
      if (hasDragged.current) return;
      const event = e as MouseEvent;
      const target = event.target as HTMLElement;
      const cardElement = target.closest(".cardItem");
      if (!cardElement) return;

      const cardIndex = Array.from(items).indexOf(cardElement as HTMLElement);
      setActiveIndex(cardIndex);
    };

    const el = containerRef.current;
    if (!el) return;

    el.addEventListener("mousedown", onDragStart);
    el.addEventListener("mousemove", onDragMove);
    el.addEventListener("mouseup", onDragEnd);
    el.addEventListener("mouseleave", onDragEnd);
    el.addEventListener("touchstart", onDragStart, { passive: false });
    el.addEventListener("touchmove", onDragMove, { passive: false });
    el.addEventListener("touchend", onDragEnd);
    el.addEventListener("click", onCardClick);

    return () => {
      el.removeEventListener("mousedown", onDragStart);
      el.removeEventListener("mousemove", onDragMove);
      el.removeEventListener("mouseup", onDragEnd);
      el.removeEventListener("mouseleave", onDragEnd);
      el.removeEventListener("touchstart", onDragStart);
      el.removeEventListener("touchmove", onDragMove);
      el.removeEventListener("touchend", onDragEnd);
      el.removeEventListener("click", onCardClick);
    };
  }, [carouselActive, activeIndex, setActiveIndex, containerRef]);
}
