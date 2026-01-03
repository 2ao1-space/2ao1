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
      gsap.fromTo(
        marqueeSplit.chars,
        { y: 300 },
        { y: 0, stagger: 0.02, duration: 0.2, ease: "power1.inOut" }
      );
      gsap.fromTo(
        marquee,
        {
          xPercent: 200,
        },
        {
          xPercent: -100,
          ease: "none",
          duration: 5,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom 80%",
            scrub: true,
            // markers: true,
          },
        }
      );
    },
    { scope: subTitleRef }
  );

  return { subTitleRef, marqueeRef };
}
