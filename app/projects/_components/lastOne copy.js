import AnimatedLink from "../../_components/AnimatedLink";
import ProjectImage from "../../_components/ProjectImage";

export default function LastOne({ projects }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 border-b border-primary-900 mb-4 md:pb-8 md:mb-8 group">
      <div className="w-full md:w-1/2 relative flex flex-col justify-between">
        {/* <!-- Project Details --> */}
        <div className="flex  justify-between items-center">
          <div className="w-full flex justify-start md:justify-start md:gap-12 items-start md:items-center">
            <span className="text-primary-500 text-sm uppercase">
              Project Name :{" "}
            </span>
            <h6 className="text-base md:text-xl uppercase font-mainHead text-main">
              {projects[0].title}
            </h6>
          </div>
          <div className="w-full flex justify-start md:justify-start md:gap-12 items-start md:items-center">
            <span className="text-primary-500 text-sm uppercase">
              Client :{" "}
            </span>
            <span className="text-base md:text-xl uppercase font-mainHead text-main">
              {projects[0].client}
            </span>
          </div>
        </div>

        {/* <!-- project date --> */}
        <span className="hidden md:block">{projects[0].date}</span>

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
              href={`/projects/${projects[0].title
                .toLowerCase()
                .replace(" ", "-")}`}
            >
              [ View Project ]
            </AnimatedLink>
          </div>
        </div>
      </div>

      {/* <!-- project img --> */}
      <div className="w-full md:w-1/2 h-[300px]">
        <ProjectImage
          src={projects[0].img}
          alt={projects[0].title}
          loading={"eager"}
          className="w-full grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  );
}
