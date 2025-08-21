import info from "../../_data/info.json";

import AnimatedLink from "../../_components/AnimatedLink";
import BackToPage from "./_components/BackToPage";
import ProjectDetails from "./_components/ProjectDetails";
import ProjectImage from "../../_components/ProjectImage";
import Footer from "../../_components/Footer";

export async function generateStaticParams() {
  return info.projects.map((project) => ({
    slug: project.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({ params }) {
  const project = info.projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  return {
    title: project ? `${project.title}` : "Project Not Found",
  };
}

export default function ProjectPage({ params }) {
  const projects = info.projects;
  const currentIndex = projects.findIndex(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  if (currentIndex === -1) {
    return (
      <PagesLayout>
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold text-red-600">Project Not Found</h1>
          <p className="text-gray-600 mt-2">
            The project you're looking for doesn't exist.
          </p>
          <AnimatedLink
            href="/projects"
            className="text-blue-500 hover:underline mt-4 inline-block"
          >
            ← Back to Projects
          </AnimatedLink>
        </div>
      </PagesLayout>
    );
  }

  const project = projects[currentIndex];
  const totalProjects = projects.length;

  const prevProject =
    currentIndex > 0 ? projects[currentIndex - 1] : projects[totalProjects - 1];
  const nextProject =
    currentIndex < totalProjects - 1 ? projects[currentIndex + 1] : projects[0];

  const prevSlug = prevProject.title.toLowerCase().replace(/\s+/g, "-");
  const nextSlug = nextProject.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      {/* backk btn */}
      <BackToPage href={`/projects`} />

      {/* Project Details */}
      <div className="md:grid grid-cols-8 gap-4 md:py-8 group items-center justify-center">
        <div className="col-span-3">
          <ProjectDetails project={project} />
        </div>

        {/* project image */}
        <div className="col-span-5 my-8 md:my-0">
          <ProjectImage
            src={project.img}
            alt={project.title}
            priority
            loading={"lazy"}
            className="w-full grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>

      {/* more details about the project */}
      <div className="w-full py-20 font-content">
        {/* bio */}
        <p className="w-full md:w-2/3 text-xl md:text-4xl font-bold">
          {project.bio}
        </p>
        {/* description */}
        <div className="flex justify-end py-12">
          <p className="w-full md:w-1/2 uppercase text-sm md:text-base">
            {project.description}
          </p>
        </div>

        {/* more image about the project */}
        <div className="space-y-20">
          {project.projectImg?.map((img, idx) => (
            <ProjectImage
              key={idx}
              src={img}
              alt={project.title}
              loading="lazy"
              className="w-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center py-4 md:py-20 gap-8 border-t border-primary-900 text-xs md:text-base">
        <div className="w-1/2 flex justify-between items-end group">
          <AnimatedLink
            href={`/projects/${prevSlug}`}
            className="text-primary-900 group-hover:text-main text-sm md:text-base h-4 md:h-8"
          >
            ← {prevProject.title}
          </AnimatedLink>
          <ProjectImage
            src={prevProject.img}
            alt={prevProject.title}
            loading={"lazy"}
            className="w-[300px] h-36 grayscale group-hover:grayscale-0 transition-all duration-500 hidden md:block"
          />
        </div>

        <div className="w-1/2 flex justify-end md:justify-between items-end group">
          <ProjectImage
            src={nextProject.img}
            alt={nextProject.title}
            loading={"lazy"}
            className="w-[300px] h-36 grayscale group-hover:grayscale-0 transition-all duration-500 hidden md:block"
          />

          <AnimatedLink
            href={`/projects/${nextSlug}`}
            className="text-primary-900 group-hover:text-main text-sm md:text-base h-4 md:h-8"
          >
            {nextProject.title} →
          </AnimatedLink>
        </div>
      </div>

      <Footer prevPage="/projects" nextPage="/contact" />
    </>
  );
}
