import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function useProjectHover({
  i,
  activeIndex,
}: {
  activeIndex: number;
  i: number;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    if (i !== activeIndex) return;

    const titleSplit = new SplitText(titleRef.current, {
      type: "lines",
      mask: "lines",
    });
    const taglineSplit = new SplitText(taglineRef.current, {
      type: "lines",
      mask: "lines",
    });
    const descSplit = new SplitText(descRef.current, {
      type: "words",
      mask: "words",
    });
    const tl = gsap.timeline();

    tl.to(overlayRef.current, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });

    tl.fromTo(
      titleSplit.lines,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" },
      0
    );

    tl.fromTo(
      taglineSplit.lines,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      0
    );

    tl.fromTo(
      arrowRef.current,
      { y: 10, x: -10, opacity: 0 },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      0
    );

    tl.fromTo(
      descSplit.words,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      0
    );

    tl.fromTo(
      buttonRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.3, ease: "none" },
      0
    );
  };

  const handleMouseLeave = () => {
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.1,
      ease: "power2.in",
    });
  };
  return {
    overlayRef,
    titleRef,
    taglineRef,
    arrowRef,
    descRef,
    buttonRef,
    handleMouseEnter,
    handleMouseLeave,
  };
}
