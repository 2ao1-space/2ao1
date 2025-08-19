import { LuArrowUpRight } from "react-icons/lu";
import Image from "next/image";
import AnimatedLink from "../_components/AnimatedLink";
import info from "../_data/info.json";
import Footer from "../_components/Footer";

export const metadata = {
  title: "All Works | My Portfolio",
};

export default function Projects() {
  const projects = info.projects;
  const allProjects = projects.slice(1, 7);
  return (
    <>
      <div className="overflow-hidden container mx-auto">
        <div className="flex justify-between items-center mt-8 px-8">
          <h1 className="font-mainHead text-6xl md:text-9xl leading-tight">
            ALL WORKS
            <sup className="text-4xl md:text-8xl text-main">
              [0{projects.length}]
            </sup>
          </h1>
        </div>

        {/* <!-- projects --> */}
        <div className="py-20">
          {/* <!-- Last project --> */}
          <div className="flex gap-4 border-b border-primary-900 pb-4 mb-4 group">
            <div className="w-1/2 relative flex flex-col justify-between">
              {/* <!-- Project Details --> */}
              <div className="flex justify-between items-center">
                <div className="w-1/2 flex justify-start gap-12 items-center">
                  <span className="text-primary-500 text-xs uppercase">
                    Name :{" "}
                  </span>
                  <h6 className="uppercase font-mainHead text-main">
                    {projects[0].title}
                  </h6>
                </div>
                <div className="w-1/2 flex justify-start gap-12 items-center">
                  <span className="text-primary-500 text-xs uppercase">
                    Client :{" "}
                  </span>
                  <span className="uppercase font-mainHead text-main">
                    {projects[0].client}
                  </span>
                </div>
              </div>

              {/* <!-- project date --> */}
              <span>{projects[0].date}</span>

              {/* <!-- more details --> */}
              <div className="flex">
                <div className="w-1/2 grid items-stretch justify-between gap-12 pt-4">
                  <ul>
                    {projects[0].type.map((type, index) => (
                      <li key={index}>[ {type} ]</li>
                    ))}
                  </ul>
                </div>
                <div className="w-1/2 flex justify-end items-end">
                  <AnimatedLink
                    href={`/projects/${info.projects[0].title
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    [ View Project ]
                  </AnimatedLink>
                </div>
              </div>
            </div>
            {/* <!-- project img --> */}
            <div className="w-1/2 h-[300px]">
              <Image
                src={info.projects[0].img}
                alt={info.projects[0].title}
                loading={"eager"}
                className="w-full grayscale group-hover:grayscale-0 transition-all duration-500"
                width={600}
                height={400}
              />
            </div>
          </div>

          {/* <!-- All projects --> */}
          <div className="grid grid-cols-12 gap-4 pb-20">
            {allProjects.map((project) => (
              <div className="col-span-6 border-b border-primary-600 pb-4 mb-4">
                <div className=" relative group overflow-hidden">
                  <div className="w-full h-[300px]">
                    <Image
                      src={project.img}
                      alt={project.title}
                      loading="eager"
                      className="w-full h-[300px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                      width={600}
                      height={400}
                    />
                  </div>

                  <div className="absolute inset-0 p-4 sm:p-6 lg:p-8 text-tertiary text-sm font-subhead flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black/40 justify-between">
                    <span className="text-2xl font-mainHead">
                      [ {project.date} ]
                    </span>
                    <div className="flex justify-between">
                      <h4 className="text-5xl font-mainHead">
                        {project.title}
                      </h4>
                      <ul className="ml-4 pl-4 border-l border-tertiary">
                        {project.type.map((type, index) => (
                          <li key={index}>[ {type} ]</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="absolute top-20 left-20">
                    <div className="inline-block relative group-hover:flex items-center gap-2 bg-white mix-blend-difference group-hover:mix-blend-normal text-black rounded-full overflow-hidden p-4  transform transition-transform duration-700 group-hover:translate-x-80">
                      <LuArrowUpRight className="w-5 h-5" />

                      <div className="hidden group-hover:block opacity-0 translate-x-4 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-0 text-black">
                        <AnimatedLink
                          href={`/projects/${project.title
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          [ View Project ]
                        </AnimatedLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <!-- contact section --> */}
        <div className="py-20 flex flex-col justify-center items-center relative space-y-8">
          <div className="flex">
            <h1 className="text-9xl font-mainHead">Let's Talk</h1>
            <sup>
              <LuArrowUpRight className="text-6xl text-main" />
            </sup>
          </div>
          <div className="w-1/2 flex flex-col items-end justify-end space-y-4">
            <p className="w-1/2">
              <span className="text-main">Ready</span> to bring your vision to
              life? I'm here to discuss your next
              <span className="text-main">project</span> and create something{" "}
              <span className="text-main">exceptional</span> together.
            </p>
            <AnimatedLink
              href="/contact"
              className="text-sm flex items-center gap-1"
            >
              [ Send Message ]
            </AnimatedLink>
          </div>
        </div>
      </div>

      <Footer prevPage="/about" nextPage="/contact" />
    </>
  );
}
