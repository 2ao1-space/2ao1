"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function AnimatedLink({
  href,
  target = "_self",
  className = "",
  children,
}) {
  const linkRef = useRef(null);

  useEffect(() => {
    const link = linkRef.current;
    if (!link) return;

    const init = async () => {
      if (document.fonts) {
        await document.fonts.ready;
        await new Promise((res) => setTimeout(res, 50));
      }

      const initialLink = link.querySelector(".initial-link");
      const secondLink = link.querySelector(".second-link");
      if (!initialLink || !secondLink) return;

      const hoverText = new SplitText(initialLink, {
        type: "chars",
        charsClass: "char",
      });
      const finalText = new SplitText(secondLink, {
        type: "chars",
        charsClass: "char",
      });

      gsap.set(hoverText.chars, { y: 0 });
      gsap.set(finalText.chars, { y: "100%" });

      const hoverTimeline = gsap.timeline({
        paused: true,
        defaults: { ease: "power2.out" },
      });

      hoverTimeline
        .to(hoverText.chars, { y: "-100%", duration: 0.3, stagger: 0.01 })
        .to(finalText.chars, { y: 0, duration: 0.3, stagger: 0.01 }, "<0.05");

      link.addEventListener("mouseenter", () => hoverTimeline.play());
      link.addEventListener("mouseleave", () => hoverTimeline.reverse());
    };

    init();
  }, []);

  return (
    <a
      ref={linkRef}
      href={href}
      target={target}
      className={`${className} animated-link flex flex-col justify-center items-center overflow-y-hidden`}
    >
      <div className="h-6 overflow-hidden relative">
        <span className="initial-link">{children}</span>
        <span className="second-link absolute top-0 left-0">{children}</span>
      </div>
    </a>
  );
}
