import AnimatedLink from "../../../_components/AnimatedLink";
import ProjectSpan from "./ProjectSpan";

export default function ProjectDetails({ project }) {
  return (
    <>
      <div className="grid grid-cols-2 md:py-12 gap-2">
        {/* project title */}
        <h4 className="col-span-2 text-5xl py-4 font-mainHead border-b text-main">
          {project.title}
        </h4>

        {/* project details: client,timeframe,created by,copyright */}
        <ProjectSpan title="client" project={project.client} />

        <ProjectSpan title="Timefram" project={project.date} />

        {/* <ProjectSpan title="Created" project={project.createdBy?.dev} /> */}

        <ProjectSpan
          title="Copyright"
          project="&copy; All Rights Reserved"
          className="text-sm md:text-base"
        />
      </div>
      {/* Btn : live, code */}
      <div className="flex items-center gap-4 font-mainHead">
        <AnimatedLink
          href={project.url}
          className="text-primary-900 hover:text-main"
        >
          [ Demo ]
        </AnimatedLink>
        |
        <AnimatedLink
          href={project.repo}
          className="text-primary-900 hover:text-main"
        >
          [ Code ]
        </AnimatedLink>
      </div>
    </>
  );
}
