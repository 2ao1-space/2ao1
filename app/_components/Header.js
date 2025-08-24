"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

import { useAvilability } from "../_hooks/useAvilability";
import Menu from "./Header/Menu";
import NameAndRole from "./Header/NameAndRole";
import Status from "./Header/Status";
import Sitemap from "./Header/Sitemap";
import Social from "./Header/Social";

export default function Header() {
  const { updateAvailability, status, timeStr } = useAvilability();

  // useEffect(() => {
  //   updateAvailability();

  //   // split-text animation for header sections
  //   const headerTexts = gsap.utils.toArray(".split-text");
  //   gsap.fromTo(
  //     headerTexts,
  //     { y: "100%", opacity: 0 },
  //     {
  //       y: "0%",
  //       opacity: 1,
  //       duration: 0.7,
  //       ease: "power3.out",
  //       stagger: 0.15,
  //     }
  //   );
  // }, []);

  return (
    <header className="sticky md:relative top-0 left-0 z-50 bg-tertiary border-b border-primary-900">
      <div className="container m-auto flex justify-between items-center font-subhead text-base md:text-sm py-1 md:py-4">
        {/* name & role */}
        <NameAndRole />
        {/* status */}
        <Status status={status} timeStr={timeStr} className="hidden sm:block" />
        {/* sitemap */}
        <Sitemap className="hidden md:block" />
        {/* social */}
        <Social className="hidden md:block" />

        <Menu status={status} timeStr={timeStr} />
      </div>
    </header>
  );
}
