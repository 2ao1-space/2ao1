import { useEffect, useState, useRef } from "react";
import { LuX, LuEqual } from "react-icons/lu";
import { gsap } from "gsap";

import info from "./../../_data/info.json";
import NameAndRole from "./NameAndRole";
import Status from "./Status";
import Sitemap from "./Sitemap";
import Social from "./Social";
import Footer from "../Footer";

export default function Menu({ status, timeStr }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.6, ease: "power3.out" }
      );

      const menuTexts = gsap.utils.toArray(
        menuRef.current.querySelectorAll(".split-text")
      );

      gsap.fromTo(
        menuTexts,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.15,
          delay: 0.2,
        }
      );
    }
  }, [isMenuOpen]);

  const handleClose = () => {
    const menu = menuRef.current;
    const menuTexts = gsap.utils.toArray(menu.querySelectorAll(".split-text"));

    gsap.to(menuTexts, {
      y: "100%",
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",
      stagger: 0.1,
    });

    gsap.to(menu, {
      x: "100%",
      duration: 0.6,
      ease: "power3.inOut",
      delay: 0.1,
      onComplete: () => setIsMenuOpen(false),
    });
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-primary-900 self-center"
        onClick={() => setIsMenuOpen(true)}
      >
        <LuEqual />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 right-0 w-full md:w-64 h-screen bg-tertiary shadow-2xl p-6 z-50 flex flex-col justify-between md:gap-6"
        >
          <div className="flex flex-col">
            {/* Close Button */}
            <button className="self-end text-primary-900" onClick={handleClose}>
              <LuX />
            </button>

            <div className="grid items-center justify-start gap-6 md:flex-grow">
              {/* name & role */}
              <NameAndRole />
              {/* status */}
              <Status status={status} timeStr={timeStr} />
              {/* sitemap */}
              <Sitemap linkStyle="flex-col" />
              {/* social */}
              <Social linkStyle="flex-col" />
            </div>
          </div>

          <div className="relative bottom-0 split-text flex justify-between items-center text-xs md:text-sm">
            <span>{info.studio} , 2025</span>
            <span>©All Rights Reserved</span>
          </div>
        </div>
      )}
    </>
  );
}
