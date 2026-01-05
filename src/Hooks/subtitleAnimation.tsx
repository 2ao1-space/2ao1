import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function useSubtitleAnimation() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const subTitleRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const marquee = marqueeRef.current;
      const section = subTitleRef.current;

      if (!marquee || !section) return;

      const marqueeSplit = new SplitText(marqueeRef.current, {
        type: "chars",
        mask: "chars",
      });

      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 450px)",
          isDesktop: "(min-width: 768px)",
        },
        (context) => {
          if (!context.conditions) return;

          const { isMobile } = context.conditions;

          gsap.fromTo(
            marqueeSplit.chars,
            { y: 300 },
            { y: 0, stagger: 0.02, duration: 0.5, ease: "power1.inOut" }
          );

          gsap.fromTo(
            marquee,
            {
              xPercent: isMobile ? 300 : 200,
            },
            {
              xPercent: isMobile ? -100 : -100,
              ease: "none",
              duration: 10,
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom 30%",
                scrub: true,
                // markers: true,
              },
            }
          );
        }
      );

      return () => {
        mm.revert();
      };
    },
    { scope: subTitleRef }
  );

  return { subTitleRef, marqueeRef };
}
