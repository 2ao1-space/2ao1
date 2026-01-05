import info from "../Data/Info.json";
import AnimatedBtn from "../Components/AnimatedBtn";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
import { useState, type RefObject } from "react";
import { LuEqual, LuX } from "react-icons/lu";

gsap.registerPlugin(ScrollToPlugin);

export default function Menu({
  menuRef,
}: {
  menuRef: RefObject<HTMLDivElement | null>;
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

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div ref={menuRef}>
      <ul className="hidden md:flex flex-wrap">
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

      <button onClick={() => setOpenMenu(true)} className="block md:hidden ">
        <LuEqual />
      </button>

      {openMenu && (
        <div className="fixed top-0 left-0 h-full w-full flex flex-col bg-darkness py-10 justify-center items-center">
          <button
            onClick={() => setOpenMenu(false)}
            className="block md:hidden text-tertiary absolute top-4 right-4"
          >
            <LuX />
          </button>
          <ul className="flex flex-col flex-wrap justify-center items-center py-8">
            {info.meta.siteMap.map((item, index) => (
              <li key={index} className="mr-2 menuSplit">
                <div className="flex text-6xl h-20 mb-1 justify-start text-tertiary">
                  <a
                    href={item.path}
                    target={item.name === "Resume" ? "_blank" : "_self"}
                    onClick={(e) => handleMenuClick(e, item.path)}
                  >
                    {item.name.toUpperCase()}
                  </a>
                  {index < info.meta.siteMap.length - 1 ? ", " : "."}
                </div>
              </li>
            ))}
          </ul>

          <footer className="absolute bottom-10 px-4 flex flex-col gap-2 justify-between text-xs capitalize text-tertiary">
            <span>By 2ao1 @2025</span>
            <span>© All Rights Reserved</span>
          </footer>
        </div>
      )}
    </div>
  );
}
