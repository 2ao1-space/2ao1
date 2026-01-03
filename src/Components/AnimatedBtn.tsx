import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

interface AnimatedBtnProps {
  href: string;
  target?: "_self" | "_blank";
  className?: string;
  children: React.ReactNode;
  height?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function AnimatedBtn({
  href,
  target,
  className,
  children,
  height = "h-5 md:h-6",
  onClick,
}: AnimatedBtnProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);

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
      onClick={onClick}
      className={`${className} animated-link flex flex-col overflow-y-hidden`}
    >
      <div className={`${height} overflow-hidden relative`}>
        <span className="initial-link">{children}</span>
        <span className="second-link absolute top-0 left-0">{children}</span>
      </div>
    </a>
  );
}
