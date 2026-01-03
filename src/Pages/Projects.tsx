import { useRef, useState } from "react";
import info from "../Data/Info.json";
import ProjectCard from "../Components/ProjectCard";
import PaginationBtns from "../Components/PaginationBtns";
import SingleProject from "./SingleProject";
import useModel from "../Hooks/useModel";
import useCarousel from "../Hooks/useCarousel";
import useProjectsIntro from "../Hooks/ProjectsIntroAnimation";

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
      <div className="absolute top-0 flex justify-center items-center">
        <h3 className="text-[350px] leading-67.5 font-Become text-center py-20 w-full pointer-events-none select-none">
          Selected Projects
        </h3>
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
