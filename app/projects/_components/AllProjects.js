import { LuArrowUpRight } from "react-icons/lu";

import AnimatedLink from "../../_components/AnimatedLink";
import ProjectImage from "../../_components/ProjectImage";

export default function AllProjects({ allProjects }) {
  return (
    <div className="grid grid-cols-12 gap-4  md:pb-20">
      {allProjects.map((project, index) => (
        <div
          key={index}
          className="col-span-12 md:col-span-4 border-b border-primary-600 pb-4 mb-4"
        >
          <div className=" relative group overflow-hidden">
            <div className="w-full">
              <ProjectImage
                src={project.img}
                alt={project.title}
                loading={"eager"}
                className="w-full h-[180px] md:h-[220px] object-contain grayscale group-hover:grayscale-0 transition-all duration-700 ease-out border"
              />
            </div>
            <div className="text-sm font-subhead flex transition-opacity duration-700 justify-between">
              <div className="flex items-center gap-2">
                <span>[{index + 2}]</span>
                <h4 className="uppercase">{project.title}</h4>
              </div>
              <AnimatedLink
                href={`/projects/${project.title
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                [ View Project ]
              </AnimatedLink>
            </div>

            {/* <div className="absolute top-10 md:top-20 left-10 md:left-20">
            <div className="inline-block relative group-hover:flex items-center gap-2 bg-white mix-blend-difference group-hover:mix-blend-normal text-black rounded-full overflow-hidden p-4  transform transition-transform duration-700 md:group-hover:translate-x-80">
            <div className="hidden group-hover:block opacity-0 md:translate-x-4 transform transition-transform duration-700 group-hover:opacity-100 md:group-hover:translate-x-0 text-black">
              <AnimatedLink
                href={`/projects/${project.title
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                [ View Project ]
              </AnimatedLink>
            </div>

            <LuArrowUpRight className="w-5 h-5" />
          </div>
          </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}
