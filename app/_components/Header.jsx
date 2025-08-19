"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import info from "../_data/info.json";
import LinkList from "./LinkList";
import { LuX, LuEqual } from "react-icons/lu";

export default function Header() {
  const [status, setStatus] = useState("Loading...");
  const [timeStr, setTimeStr] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);

  function getStatusBtHour(hour, now) {
    let status = "";
    let until;

    if (hour >= 0 && hour < 9) {
      status = "Sleeping. Will get back soon!";
      until = new Date(now.setHours(9, 0, 0, 0));
    }

    if (hour >= 9 && hour < 17) {
      status = "Available to work.";
      until = new Date(now.setHours(17, 0, 0, 0));
    }

    if (hour >= 17 && hour < 23) {
      status = "Relaxing & Recharging.";
      until = new Date(now.setHours(23, 0, 0, 0));
    }

    if (hour >= 23) {
      status = "Sleeping. Will get back soon!";
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(9, 0, 0, 0);
      until = tomorrow;
    }

    return { status, until };
  }

  function updateAvailability() {
    const now = new Date();
    const hour = now.getHours();
    const timeStr = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const { status } = getStatusBtHour(hour, now);

    setStatus(status);
    setTimeStr(timeStr);

    const msToNextMinute =
      60000 - (now.getSeconds() * 1000 + now.getMilliseconds());
    setTimeout(updateAvailability, msToNextMinute);
  }

  // -------- Animate SplitText on Header mount --------
  useEffect(() => {
    updateAvailability();

    // split-text animation for header sections
    const headerTexts = gsap.utils.toArray(".split-text");
    gsap.fromTo(
      headerTexts,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
      }
    );
  }, []);

  // -------- Animate SplitText on Mobile Menu open --------
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
    <header className="bg-tertiary border-b border-primary-900">
      <div className="container m-auto flex justify-between items-center font-subhead text-xs py-4">
        {/* name & role */}
        <div className="overflow-hidden">
          <span className="capitalize text-xs text-secondary-500 split-text">
            {info.name}
          </span>
          <p className="uppercase split-text">{info.role}.</p>
        </div>

        {/* status */}
        <div className="hidden md:inline-block overflow-hidden">
          <span className="capitalize text-xs text-secondary-500 split-text">
            status
          </span>
          <p id="availability-status" className="uppercase split-text">
            {timeStr ? `${timeStr}, Eg. ${status}` : "Loading..."}
          </p>
        </div>

        {/* sitemap */}
        <div className="hidden md:inline-block overflow-hidden">
          <span className="capitalize text-xs text-secondary-500 split-text">
            sitemap
          </span>
          <div className="split-text">
            <LinkList
              items={info.siteMap}
              projectsCount={info.projects.length}
            />
          </div>
        </div>

        {/* social */}
        <div className="hidden md:inline-block overflow-hidden">
          <span className="capitalize text-xs text-secondary-500 split-text">
            connect
          </span>
          <div className="split-text">
            <LinkList items={info.social} />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary-900"
          onClick={() => setIsMenuOpen(true)}
        >
          <LuEqual />
        </button>
      </div>

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

          <div className="overflow-hidden">
            <span className="capitalize text-xs text-secondary-500 split-text">
              {info.name}
            </span>
            <p className="uppercase split-text">{info.role}.</p>
          </div>

          {/* status */}
          <div className="overflow-hidden">
            <span className="capitalize text-xs text-secondary-500 split-text">
              status
            </span>
            <p className="uppercase split-text">
              {timeStr ? `${timeStr}, Eg. ${status}` : "Loading..."}
            </p>
          </div>

          {/* sitemap */}
          <div className="overflow-hidden">
            <span className="capitalize text-xs text-secondary-500 split-text">
              sitemap
            </span>
            <div className="split-text">
              <LinkList
                items={info.siteMap}
                projectsCount={info.projects.length}
              />
            </div>
          </div>

          {/* social */}
          <div className="overflow-hidden">
            <span className="capitalize text-xs text-secondary-500 split-text">
              connect
            </span>
            <div className="split-text">
              <LinkList items={info.social} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
