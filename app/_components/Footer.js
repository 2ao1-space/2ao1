"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import info from "../_data/info.json";
import FooterNav from "./Footer/FooterNav";
export default function Footer({ prevPage = "", nextPage = "" }) {
  const footerRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const el = footerRef.current;
    const splitEls = el.querySelectorAll(".split-text");

    splitEls.forEach((section) => {
      const chars = section.textContent.split("");
      section.textContent = "";
      chars.forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.display = "inline-block";
        section.appendChild(span);
      });
    });

    gsap.fromTo(
      el.querySelectorAll(".split-text span"),
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.03,
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="container mx-auto font-subhead border-t border-primary-900 pt-2 pb-4 flex justify-between items-center"
    >
      <div className="flex text-xs uppercase overflow-hidden">
        <span className="hidden sm:block split-text">
          {`${info.name} , 2025 © All Rights Reserved`}
        </span>
        <span className="sm:hidden split-text">{`©${info.name} , 2025`}</span>
      </div>

      <FooterNav
        nextPage={nextPage}
        prevPage={prevPage}
        className={`text-xs h-4 md:text-base md:h-auto`}
      />
    </footer>
  );
}
