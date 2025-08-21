import { LuArrowUpRight } from "react-icons/lu";

import AnimatedLink from "../../_components/AnimatedLink";
import ProjectImage from "../../_components/ProjectImage";

export default function AllProjects({ allProjects }) {
  return (
    <div className="grid grid-cols-12 gap-4  md:pb-20">
      {allProjects.map((project, index) => (
        <div
          key={index}
          className="col-span-12 md:col-span-6 border-b border-primary-600 pb-4 mb-4"
        >
          <div className=" relative group overflow-hidden">
            <div className="w-full h-[150px] md:h-[300px]">
              <ProjectImage
                src={project.img}
                alt={project.title}
                loading={"eager"}
                className="w-full h-[150px] md:h-[300px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
            </div>

            <div className="hidden absolute inset-0 p-4 sm:p-6 lg:p-8 text-tertiary text-sm font-subhead md:flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black/40 justify-between">
              <span className="text-2xl font-mainHead">[ {project.date} ]</span>
              <div className="flex justify-between">
                <h4 className="text-5xl font-mainHead">{project.title}</h4>
                <ul className="ml-4 pl-4 border-l border-tertiary">
                  {project.type.map((type, index) => (
                    <li key={index}>[ {type} ]</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="absolute top-10 md:top-20 left-10 md:left-20">
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
