import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function useAboutAnimation() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const subTitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 700px)",
        isTablet: "(min-width: 450px)",
        isDesktop: "(min-width: 768px)",
      },
      (context) => {
        let { isMobile, isDesktop, isTablet } = context.conditions;

        gsap.fromTo(
          imageRef.current,
          { height: "0%" },
          {
            height: "100%",
            duration: 1,
            ease: "none",
            scrollTrigger: {
              trigger: imageRef.current,
              start: isMobile ? "top 60%" : isTablet ? "top 5%" : "top 50%",
              end: isMobile ? "top 50%" : isTablet ? "top top" : "top 20%",
              scrub: true,
            },
          }
        );

        if (!isMobile) {
          gsap.to(imageRef.current, {
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 20%",
              end: isMobile ? "+=500" : isTablet ? "+=900" : "+=1000",
              scrub: true,
              pin: aboutRef.current,
              anticipatePin: 1,
            },
          });
        }

        const aboutElements = document.querySelectorAll(".aboutContent");

        aboutElements.forEach((el) => {
          const split = new SplitText(el, {
            type: "words",
            wordsClass: "aboutword",
            mask: "words",
          });

          gsap.fromTo(
            split.words,
            { y: isMobile ? 50 : 100, opacity: 0, visibility: "hidden" },
            {
              y: 0,
              opacity: 1,
              visibility: "visible",
              duration: 1,
              stagger: isMobile ? 0.05 : 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: isMobile ? "top bottom" : "top 80%",
                end: "top 60%",
                scrub: true,
              },
            }
          );
        });
      }
    );
    return () => {
      mm.revert();
    };
  });
  return { aboutRef, imageRef };
}
