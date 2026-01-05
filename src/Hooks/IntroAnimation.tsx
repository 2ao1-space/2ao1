import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function useIntroAnimation() {
  const heroRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const pageTitleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const header = heroRef.current;
    const headerMenu = menuRef.current;
    const pageTitle = pageTitleRef.current;

    if (!header || !headerMenu || !pageTitle) return;

    const titleSplit = new SplitText(pageTitle, {
      type: "chars",
      mask: "chars",
    });
    const MenuSplit = new SplitText(".menuSplit", {
      type: "lines",
      linesClass: "line",
      mask: "lines",
    });
    const socialSplit = new SplitText(".socialLink", {
      type: "lines",
      mask: "lines",
    });

    gsap.set(headerMenu, {
      opacity: 0,
      visibility: "hidden",
      pointerEvents: "none",
      display: "none",
    });

    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 767px)",
        isDesktop: "(min-width: 768px)",
      },
      (context) => {
        if (!context.conditions) return;

        const { isMobile } = context.conditions;

        const IntroTl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });
        IntroTl.fromTo(
          titleSplit.chars,
          { y: isMobile ? 150 : 300, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: isMobile ? 0.5 : 0.8,
            stagger: isMobile ? 0.01 : 0.02,
            ease: "power4.out",
          }
        ).fromTo(
          socialSplit.lines,
          { y: isMobile ? 50 : 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: isMobile ? 0.05 : 0.08,
            ease: "power4.out",
          },
          "-=0.4"
        );

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: isMobile ? "+=200" : "+=500",
            scrub: 1,
          },
        });

        tl.to(
          header,
          {
            height: isMobile ? "60px" : "80px",
            paddingTop: isMobile ? "8px" : "12px",
            paddingBottom: isMobile ? "8px" : "12px",
            willChange: "height, padding",
          },
          0
        )
          .to(
            pageTitle,
            {
              fontSize: isMobile ? "24px" : "32px",
              lineHeight: isMobile ? "26px" : "32px",
              height: "auto",
              willChange: "font-size",
            },
            0
          )
          .to(
            headerMenu,
            {
              display: "flex",
              visibility: "visible",
              opacity: 1,
              pointerEvents: "auto",
              duration: 0.3,
            },
            0.2
          )
          .fromTo(
            MenuSplit.lines,
            { y: isMobile ? 50 : 100, opacity: 0 },
            {
              y: 0,
              opacity: 2,
              stagger: isMobile ? 0.04 : 0.07,
              ease: "power3.out",
            },
            0.3
          );
      }
    );

    return () => {
      mm.revert();
    };
  });

  return { heroRef, menuRef, pageTitleRef };
}
