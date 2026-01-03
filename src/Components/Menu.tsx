import info from "../Data/Info.json";
import AnimatedBtn from "../Components/AnimatedBtn";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
import type { RefObject } from "react";

gsap.registerPlugin(ScrollToPlugin);

export default function Menu({
  menuRef,
}: {
  menuRef: RefObject<HTMLUListElement | null>;
}) {
  const handleMenuClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();

    if (path.includes(".pdf") || path.startsWith("/")) {
      window.open(path, "_blank");
      return;
    }

    const section = document.getElementById(path);
    if (!section) return;

    gsap.to(window, {
      scrollTo: section,
      duration: 1,
      ease: "power3.out",
    });
  };

  return (
    <ul ref={menuRef} className="flex flex-wrap">
      {info.meta.siteMap.map((item, index) => (
        <li key={index} className="mr-2 menuSplit">
          <div className="flex h-5 md:h-6 mb-1 justify-start">
            <AnimatedBtn
              href={item.path}
              target={item.name === "Resume" ? "_blank" : "_self"}
              onClick={(e) => handleMenuClick(e, item.path)}
            >
              {item.name.toUpperCase()}
            </AnimatedBtn>
            {index < info.meta.siteMap.length - 1 ? ", " : "."}
          </div>
        </li>
      ))}
    </ul>
  );
}
