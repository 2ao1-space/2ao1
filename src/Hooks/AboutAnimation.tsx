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
    const subTitle = new SplitText(subTitleRef.current, {
      type: "chars",
      mask: "chars",
    });

    gsap.fromTo(
      subTitle.chars,
      { y: 300 },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        stagger: 0.02,
        ease: "power4.out",
      },
      "+=1"
    );

    if (subTitle && subTitleRef.current) {
      gsap.fromTo(
        subTitle.chars,
        { x: 0 },
        {
          x: 100,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: subTitleRef.current,
            start: "bottom bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
    }

    gsap.fromTo(
      imageRef.current,
      { height: "0%" },
      {
        height: "100%",
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 50%",
          end: "top 40%",
          scrub: true,
        },
      }
    );

    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 10%",
        end: "+=1100",
        scrub: true,
        pin: aboutRef.current,
      },
    });

    const aboutElements = document.querySelectorAll(".aboutContent");

    aboutElements.forEach((el) => {
      const split = new SplitText(el, {
        type: "words",
        wordsClass: "aboutword",
        mask: "words",
      });

      gsap.fromTo(
        split.words,
        { y: 100, opacity: 0, visibility: "hidden" },
        {
          y: 0,
          opacity: 1,
          visibility: "visible",
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    });
  });
  return { aboutRef, imageRef };
}
