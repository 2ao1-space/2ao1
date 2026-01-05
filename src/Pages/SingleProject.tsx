import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import AnimatedBtn from "../Components/AnimatedBtn";
import type { ProjectType } from "../Types/ProjectType";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function SingleProject({
  closeModal,
  selectedProject,
}: {
  closeModal: () => void;
  selectedProject: ProjectType;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const aboutRef = useRef<HTMLParagraphElement>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    } else {
      setTimeout(() => setFontsLoaded(true), 100);
    }
  }, []);

  useGSAP(() => {
    if (!fontsLoaded || !modalRef.current) return;

    const projectElements = document.querySelectorAll(".projectContent");

    projectElements.forEach((el) => {
      const split = new SplitText(el, {
        type: "lines",
        linesClass: "projectword",
        mask: "lines",
      });

      gsap.fromTo(
        split.lines,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.5,
          ease: "power2.out",
        }
      );
    });
  }, [fontsLoaded]);

  const leftImages =
    selectedProject.screens?.filter((_, idx) => idx % 2 === 0) || [];
  const rightImages =
    selectedProject.screens?.filter((_, idx) => idx % 2 !== 0) || [];

  return (
    <div
      className="absolute top-0 py-10 h-screen w-full inset-0 z-99999 flex items-center justify-center bg-black/80"
      onClick={closeModal}
    >
      <div
        ref={modalRef}
        className="relative bg-tertiary w-full h-screen overflow-hidden p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-6 md:top-4 right-6 md:right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full transition"
        >
          ✕
        </button>

        <div ref={scrollContainerRef} className="h-full overflow-y-auto">
          <div
            className="mb-10 left-animate relative overflow-hidden rounded-lg"
            style={{
              backgroundImage: `url(${selectedProject.thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: innerWidth < 700 ? "200px" : "400px",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-darkness/40 to-darkness/90" />

            <div className="relative bottom-0 w-full h-100 p-8 flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end">
              <h2
                ref={titleRef}
                className="projectContent text-3xl sm:text-7xl lg:text-[180px] font-bold text-white font-SecFont leading-none drop-shadow-2xl"
              >
                {selectedProject.title}
              </h2>
              <p className="projectContent text-white/90 text-lg">
                {selectedProject.tagline}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start">
            <div className="mb-8 left-animate w-full sm:w-2/3 lg:w-1/2">
              <span className="projectContent capitalize text-sm text-gray-500 block mb-2">
                About the Project
              </span>
              <p
                ref={aboutRef}
                className="projectContent text-darkness leading-relaxed sm:w-3/4 lg:w-2/3"
              >
                {selectedProject.intent.details}
              </p>
            </div>

            <div className="flex flex-col gap-4 justify-start w-full sm:w-1/3 lg:w-1/2">
              <div className="flex gap-4 justify-start btn-animate">
                {selectedProject.links.live && (
                  <AnimatedBtn
                    href={selectedProject.links.live}
                    target="_blank"
                    className="projectContent border border-main px-4 h-7 rounded-sm bg-main text-tertiary"
                  >
                    Live
                  </AnimatedBtn>
                )}

                {selectedProject.links.repo && (
                  <AnimatedBtn
                    href={selectedProject.links.repo}
                    target="_blank"
                    className="projectContent border border-darkness px-4 h-7 rounded-sm text-darkness bg-tertiary"
                  >
                    Code
                  </AnimatedBtn>
                )}
              </div>
              <div className="mt-4 md:mt-8 mb-8 left-animate">
                <span className="projectContent capitalize text-sm text-gray-500 block mb-2">
                  Technologies
                </span>
                <ul className="flex flex-wrap gap-2">
                  {selectedProject.techStack?.map((tech, i) => (
                    <li
                      key={i}
                      className="projectContent px-3 py-1 bg-gray-200 text-darkness rounded-full text-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 md:gap-4 justify-between items-start md:mt-6">
            <div className="left-animate w-full sm:w-1/2">
              <span className="projectContent capitalize text-sm text-gray-500 block mb-2">
                Focus on
              </span>
              <p className="projectContent text-gray-600 leading-relaxed">
                {selectedProject.focus}
              </p>
            </div>

            {selectedProject.responsibilities && (
              <div className="responsibilities w-full sm:w-1/2">
                <span className="capitalize text-sm text-gray-500 block mb-2">
                  Responsibilities
                </span>
                <div className="space-y-2">
                  {selectedProject.responsibilities.map((res, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed flex">
                      <span className="mr-3 text-darkness font-bold">•</span>
                      {res}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {selectedProject.screens && selectedProject.screens.length > 0 && (
            <div className="py-20 flex flex-col sm:flex-row gap-8 overflow-x-hidden">
              <div className="w-full sm:w-1/2 space-y-12">
                {leftImages.map((screen, idx) => (
                  <img
                    key={`left-${idx}`}
                    src={screen}
                    alt={`${selectedProject.title} screen ${idx * 2 + 1}`}
                    className="screenshot w-full rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                  />
                ))}
              </div>

              <div className="w-full sm:w-1/2 space-y-12 mt-20">
                {rightImages.map((screen, idx) => (
                  <img
                    key={`right-${idx}`}
                    src={screen}
                    alt={`${selectedProject.title} screen ${idx * 2 + 2}`}
                    className="screenshot w-full rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
