import info from "../../_data/info.json";
import AnimatedLink from "../../_components/AnimatedLink";

export default function ProjectsSection() {
  return (
    <div className="flex gap-4 items-start pb-20">
      <span className="w-1/4">[ 04 ]</span>
      <div className="w-3/4">
        <h3 className="text-sm md:text-2xl font-bold mb-8">Projects</h3>
        {info.projects.map((project, i) => (
          <div
            key={i}
            className="flex justify-between items-start py-2 border-b border-primary-900 gap-8"
          >
            <div>
              <h5 className="text-sm md:text-base text-main">
                <AnimatedLink
                  href={`/projects/${project.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {project.title}
                </AnimatedLink>
              </h5>
            </div>
            <div className="hidden md:flex w-1/4 justify-end">
              <span>[ {project.date} ]</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
