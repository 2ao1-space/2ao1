import type { RefObject } from "react";
import { useEffect } from "react";
import info from "../Data/Info.json";
import gsap from "gsap";

export default function Title({
  pageTitleRef,
}: {
  pageTitleRef: RefObject<HTMLHeadingElement | null>;
}) {
  useEffect(() => {
    if (!pageTitleRef.current) return;

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
        if (!context.conditions) return;

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
        let textAlign = "start";

        if (isMobile) {
          fontSize = "200px";
          lineHeight = "170px";
          textAlign = "center";
          height = "300px";
        } else if (isVeryShortDesktop) {
          fontSize = "225px";
          lineHeight = "200px";
          height = "160px";
        } else if (isShortDesktop) {
          fontSize = "248px";
          lineHeight = "220px";
          height = "175px";
        } else if (isMediumDesktop) {
          fontSize = "445px";
          lineHeight = "395px";
          height = "315px";
        } else if (isTallDesktop) {
          fontSize = "421px";
          lineHeight = "370px";
          height = "295px";
        }

        gsap.set(pageTitleRef.current, {
          fontSize: fontSize,
          lineHeight: lineHeight,
          textAlign: textAlign,
          height: height,
        });
      },
    );

    return () => {
      mm.revert();
    };
  }, [pageTitleRef]);

  const scrollToTop = (e?: React.MouseEvent) => {
    e?.preventDefault();
    gsap.to(window, {
      scrollTo: 0,
      duration: 1,
      ease: "power3.out",
    });
  };

  return (
    <h1
      ref={pageTitleRef}
      onClick={scrollToTop}
      className={`cursor-pointer font-Become uppercase text-center`}
    >
      {info.meta.name}
    </h1>
  );
}
