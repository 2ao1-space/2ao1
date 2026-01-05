import { Outlet } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Index() {
  const mainContent = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!mainContent.current) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        // mobile
        isMobile: "(max-width: 400px)",
        // mobile rotate
        isVeryShortDesktop: "(min-width: 700px) and (max-height: 500px)",
        // tablet
        isShortDesktop: "(min-width: 425px) and (max-height: 600px)",
        // laptop screen
        isMediumDesktop: "(min-width: 768px) and (max-height: 700px)",
        // screen width 1000px, height 900px
        isTallDesktop:
          "(min-width: 768px) and (min-height: 801px) and (max-height: 1000px)",
      },
      (context) => {
        if (!context.conditions) return;

        const {
          isMobile,
          isVeryShortDesktop,
          isShortDesktop,
          isMediumDesktop,
          isTallDesktop,
        } = context.conditions;

        let paddingTop = "445px";

        if (isMobile) {
          paddingTop = "300px";
        } else if (isVeryShortDesktop) {
          paddingTop = "110px";
        } else if (isShortDesktop) {
          paddingTop = "140px";
        } else if (isMediumDesktop) {
          paddingTop = "280px";
        } else if (isTallDesktop) {
          paddingTop = "260px";
        }

        gsap.set(mainContent.current, {
          paddingTop: paddingTop,
        });
      }
    );

    return () => {
      mm.revert();
    };
  }, [mainContent]);

  return (
    <main
      ref={mainContent}
      className="bg-tertiary  text-darkness overflow-hidden"
    >
      <section id="about" className="pt-10">
        <About />
      </section>
      <section id="projects" className="relative overflow-hidden">
        <Projects />
        <Outlet />
      </section>
      <section id="contact" className="h-screen">
        <Contact />
      </section>
    </main>
  );
}
