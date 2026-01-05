import { useRef, useState } from "react";
import info from "../Data/Info.json";
import ProjectCard from "../Components/ProjectCard";
import PaginationBtns from "../Components/PaginationBtns";
import SingleProject from "./SingleProject";
import useModel from "../Hooks/useModel";
import useCarousel from "../Hooks/useCarousel";
import useProjectsIntro from "../Hooks/ProjectsIntroAnimation";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

export default function Projects() {
  const INITIAL_INDEX = info.projects.length - 1;
  const containerRef = useRef(null);
  const hasEnteredCarousel = useRef(false);

  const [carouselActive, setCarouselActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(INITIAL_INDEX);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCardIndex, setModalCardIndex] = useState<number | null>(null);

  useProjectsIntro({
    containerRef,
    hasEnteredCarousel,
    setCarouselActive,
    setActiveIndex,
    INITIAL_INDEX,
  });

  useCarousel({
    carouselActive,
    activeIndex,
    setActiveIndex,
    containerRef,
  });

  const { openModal, closeModal } = useModel({
    setModalOpen,
    setModalCardIndex,
    modalOpen,
  });

  const selectedProject =
    modalCardIndex !== null ? info.projects[modalCardIndex] : null;

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative h-screen"
      style={{ cursor: carouselActive ? "grab" : "default" }}
    >
      <div className="absolute top-0 flex flex-col justify-center items-center h-screen w-full">
        <h3 className="text-9xl md:text-[200px] lg:text-[350px] leading-24 md:leading-37.5 lg:leading-67.5 font-Become text-center py-20 w-full pointer-events-none select-none h-85 sm:h-120 md:h-105 lg:h-160">
          Selected <br />
          Projects
        </h3>

        <span
          className={`absolute ${
            innerWidth < 450 ? "top-30" : "top-20"
          }  lg:-bottom-90 lg:right-20 flex items-center gap-4 text-darkness/80 text-xs`}
        >
          <LuArrowLeft /> move <LuArrowRight />
        </span>
      </div>
      <div className="relative h-screen overflow-hidden">
        {info.projects.map((card, i) => {
          return (
            <ProjectCard
              key={i}
              openModal={openModal}
              activeIndex={activeIndex}
              card={card}
              i={i}
            />
          );
        })}

        <PaginationBtns
          carouselActive={carouselActive}
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
        />
      </div>

      {modalOpen && selectedProject && (
        <SingleProject
          closeModal={closeModal}
          selectedProject={selectedProject}
        />
      )}
    </section>
  );
}
