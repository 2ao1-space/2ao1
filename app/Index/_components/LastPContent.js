import AnimatedLink from "../../_components/AnimatedLink";
import LPContent from "./LPContent";

export default function LastPContent({ project }) {
  return (
    <div
      className="md:absolute inset-0 p-4 sm:p-6 lg:p-8 text-primary-900 md:text-tertiary text-sm font-subhead flex flex-col
               md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:bg-[rgba(0,0,0,0.6)] "
    >
      {/* more details : project content */}
      <LPContent
        client={project.client}
        category={project.type}
        description={project.description}
      />

      {/* project main info: title , button to show more */}
      <div className="flex flex-col md:flex-row md:justify-between items-end flex-1 gap-4 mt-4">
        <h5 className="overlay-text text-4xl lg:text-6xl xl:text-8xl font-subhead">
          {project.title}
        </h5>

        <AnimatedLink
          className="text-sm"
          href={`/projects/${project.title.toLowerCase().replace(" ", "-")}`}
        >
          [ View Case ]
        </AnimatedLink>
      </div>
    </div>
  );
}
