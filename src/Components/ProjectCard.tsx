import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import type { ProjectType } from "../Types/ProjectType";
import useProjectHover from "../Hooks/useProjectHover";

export default function ProjectCard({
  openModal,
  activeIndex,
  card,
  i,
}: {
  openModal: (index: number) => void;
  activeIndex: number;
  i: number;
  card: ProjectType;
}) {
  const {
    overlayRef,
    titleRef,
    taglineRef,
    arrowRef,
    descRef,
    buttonRef,
    handleMouseEnter,
    handleMouseLeave,
  } = useProjectHover({ i, activeIndex });
  return (
    <div
      key={i}
      className="cardItem absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-180 h-96 rounded-md flex flex-col items-center justify-between text-white bg-cover bg-center group shadow-2xl overflow-hidden"
      style={{
        userSelect: "none",
        WebkitUserSelect: "none",
        backgroundImage: `url(${card.thumbnail})`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={overlayRef}
        className={`
                ${i === activeIndex ? "flex" : "hidden"} 
                w-full h-full p-4 flex-col justify-between
              `}
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8))`,
          opacity: 0,
        }}
      >
        <div className="w-full flex justify-between items-start relative">
          <div className="flex flex-col text-6xl pointer-events-none font-SecFont w-1/2 space-y-4">
            <h5 ref={titleRef} className="whitespace-nowrap">
              {card.title}
            </h5>
            <p
              ref={taglineRef}
              className="text-sm text-white/90 pointer-events-none"
            >
              {card.tagline}
            </p>
          </div>

          <Link to={card.links.live} target="_blank">
            <div ref={arrowRef}>
              <LuArrowUpRight className="text-8xl absolute -top-4 -right-4" />
            </div>
          </Link>
        </div>
        <div className="flex justify-between items-end">
          <p
            ref={descRef}
            className="text-sm text-white/90 pointer-events-none w-1/3"
          >
            {card.intent.short}
          </p>
          <button
            ref={buttonRef}
            onClick={(e) => {
              e.stopPropagation();
              openModal(i);
            }}
            onMouseDown={(e) => e.stopPropagation()}
            className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition pointer-events-auto"
          >
            Open Details
          </button>
        </div>
      </div>
    </div>
  );
}
