import { useEffect, useState, useRef } from "react";
import { LuX, LuEqual } from "react-icons/lu";
import { gsap } from "gsap";

import NameAndRole from "./NameAndRole";
import Status from "./Status";
import Sitemap from "./Sitemap";
import Social from "./Social";

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

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-primary-900"
        onClick={() => setIsMenuOpen(true)}
      >
        <LuEqual />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 right-0 w-64 h-full bg-tertiary shadow-2xl p-6 z-50 flex flex-col gap-6"
        >
          {/* Close Button */}
          <button
            className="self-end text-primary-900"
            onClick={() => setIsMenuOpen(false)}
          >
            <LuX />
          </button>

          {/* name & role */}
          <NameAndRole />
          {/* status */}
          <Status status={status} timeStr={timeStr} />
          {/* sitemap */}
          <Sitemap />
          {/* social */}
          <Social />
        </div>
      )}
    </>
  );
}
