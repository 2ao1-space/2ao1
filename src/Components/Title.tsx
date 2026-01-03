import type { RefObject } from "react";
import info from "../Data/Info.json";
import gsap from "gsap";

export default function Title({
  pageTitleRef,
}: {
  pageTitleRef: RefObject<HTMLHeadingElement | null>;
}) {
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
      className="cursor-pointer font-Become text-[80px] md:text-[445px] leading-97.5 uppercase h-77.5"
    >
      {info.meta.name}
    </h1>
  );
}
