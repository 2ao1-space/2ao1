import { useEffect } from "react";
import info from "../Data/Info.json";
import useSubtitleAnimation from "../Hooks/subtitleAnimation";
import gsap from "gsap";

export default function SubTitle() {
  const { subTitleRef, marqueeRef } = useSubtitleAnimation();

  useEffect(() => {
    if (!subTitleRef.current) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        // mobile
        isMobile: "(max-width: 400px)",
        // mobile rotate
        isVeryShortDesktop: "(min-width: 700px) and (max-height: 500px)",
        // tablet
        isShortDesktop: "(min-width: 425px) and (max-height: 600px)",
        // laptop screen
        isMediumDesktop: "(min-width: 768px) and (max-height: 700px)",
        // screen width 1000px, height 900px
        isTallDesktop:
          "(min-width: 768px) and (min-height: 801px) and (max-height: 1000px)",
      },
      (context) => {
        const {
          isMobile,
          isVeryShortDesktop,
          isShortDesktop,
          isMediumDesktop,
          isTallDesktop,
        } = context.conditions;

        let fontSize = "445px";
        let lineHeight = "390px";
        let height = "350px";

        if (isMobile) {
          fontSize = "90px";
          lineHeight = "90px";
          height = "150px";
        } else if (isVeryShortDesktop) {
          fontSize = "100px";
          lineHeight = "100px";
          height = "160px";
        } else if (isShortDesktop) {
          fontSize = "160px";
          lineHeight = "200px";
          height = "175px";
        } else if (isMediumDesktop) {
          fontSize = "450px";
          lineHeight = "395px";
          height = "390px";
        } else if (isTallDesktop) {
          fontSize = "421px";
          lineHeight = "400px";
          height = "380px";
        }

        gsap.set(subTitleRef.current, {
          fontSize: fontSize,
          lineHeight: lineHeight,
          height: height,
        });
      }
    );

    return () => {
      mm.revert();
    };
  }, [subTitleRef]);

  return (
    <section ref={subTitleRef} className="marquee-section overflow-hidden z-0">
      <div
        ref={marqueeRef}
        className="marquee__inner uppercase font-Become whitespace-nowrap  overflow-hidden "
        // className="marquee__inner text-[400px] leading-95 uppercase h-72 font-Become whitespace-nowrap  overflow-hidden "
      >
        <span>{info.meta.title}</span>
      </div>
    </section>
  );
}
