import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { MutableRefObject } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function useProjectsIntro({
  containerRef,
  hasEnteredCarousel,
  setCarouselActive,
  setActiveIndex,
  INITIAL_INDEX,
}: {
  containerRef: MutableRefObject<HTMLElement | null>;
  hasEnteredCarousel: MutableRefObject<boolean>;
  setCarouselActive: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  INITIAL_INDEX: number;
}) {
  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>(".cardItem");

    const tlRef = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=500%",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          if (self.progress >= 0.7 && !hasEnteredCarousel.current) {
            hasEnteredCarousel.current = true;
            setCarouselActive(true);
            setActiveIndex(INITIAL_INDEX);
          }
          if (self.progress < 0.7 && hasEnteredCarousel.current) {
            hasEnteredCarousel.current = false;
            setCarouselActive(false);
            setActiveIndex(INITIAL_INDEX);
            gsap.to(items[0], {
              x: 200,
              scale: 0.75,
              opacity: 1,
              zIndex: 10,
              duration: 0.2,
              ease: "power2.out",
            });
            gsap.to(items[1], {
              x: -200,
              scale: 0.75,
              opacity: 1,
              zIndex: 10,
              duration: 0.2,
              ease: "power2.out",
            });
            gsap.to(items[2], {
              x: 0,
              y: -100,
              scale: 0.8,
              opacity: 0,
              zIndex: 10,
              duration: 0.2,
              ease: "power2.out",
            });

            items.forEach((item, i) => {
              if (i > 2) {
                gsap.to(item, {
                  opacity: 0,
                  duration: 0.6,
                  ease: "power2.out",
                });
              }
            });
          }
        },
      },
    });

    tlRef
      .fromTo(
        items[0],
        { opacity: 0, y: 230, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1 }
      )
      .to(items[0], { duration: 1 })
      .to(items[0], { x: 300, scale: 0.9, duration: 0.5 })
      .fromTo(
        items[1],
        { opacity: 0, y: 200, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1 },
        "-=0.5"
      )
      .to(items[1], { duration: 1 })
      .to(items[1], { x: -300, scale: 0.9, duration: 0.5 })
      .fromTo(
        items[2],
        { opacity: 0, y: 200, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1 },
        "-=0.5"
      )
      .to({}, { duration: 2 });
  }, []);
  return;
}
