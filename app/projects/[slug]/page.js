import Image from "next/image";
import AnimatedLink from "../../_components/AnimatedLink";
import Footer from "../../_components/Footer";
import info from "../../_data/info.json";
import { LuArrowLeft } from "react-icons/lu";
import Link from "next/link";

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
    title: project ? `${project.title} | My Portfolio` : "Project Not Found",
  };
}

export default function ProjectPage({ params }) {
  const projects = info.projects;
  const currentIndex = projects.findIndex(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  if (currentIndex === -1) {
    return (
      <main className="container mx-auto p-4">
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
      </main>
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
      <main className="container mx-auto p-4">
        <div className="w-full">
          <Link href={`/projects`}>
            <LuArrowLeft />
          </Link>
        </div>
        <div className="grid grid-cols-8 gap-4 py-8 group items-center justify-center">
          <div className="col-span-3">
            <div className="grid grid-cols-2 py-12">
              <h4 className="col-span-2 text-5xl py-4 font-mainHead border-b text-main">
                {project.title}
              </h4>
              <div className="col-span-1 py-4 border-b">
                <span className="text-xs text-slate-500">Client</span>
                <h5>{project.client}</h5>
              </div>
              <div className="col-span-1 py-4 border-b">
                <span className="text-xs text-slate-500">Year</span>
                <h5>{project.date}</h5>
              </div>
              <div className="col-span-1 py-4 border-b">
                <span className="text-xs text-slate-500">Created by</span>
                <h5>
                  {project.createdBy?.dev}
                  <sup className="text-xs text-main">[ DEV ]</sup>
                </h5>
              </div>
              <div className="col-span-1 py-4 border-b">
                <span className="text-xs text-slate-500">Copyright</span>
                <h5>&copy; All Rights Reserved</h5>
              </div>
            </div>
            <div className="flex items-center gap-4 font-mainHead">
              <AnimatedLink
                href={project.url}
                className="text-primary-900 hover:text-main"
              >
                [ View Live ]
              </AnimatedLink>{" "}
              |
              <AnimatedLink
                href={project.repo}
                className="text-primary-900 hover:text-main"
              >
                [ View Code ]
              </AnimatedLink>
            </div>
          </div>
          <div className="col-span-5">
            <Image
              src={project.img}
              alt={project.title}
              width={800}
              height={500}
              priority
              className="w-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        <div className="w-full py-20 font-content">
          <p className="w-2/3 text-4xl font-bold">{project.bio}</p>
          <div className="flex justify-end py-12">
            <p className="w-1/2 uppercase text-sm">{project.description}</p>
          </div>
          <div className="space-y-20">
            {project.projectImg?.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={project.title}
                width={800}
                height={500}
                loading="lazy"
                className="w-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center py-20 gap-8 border-t border-primary-900">
          <div className="w-1/2 flex justify-between items-end group">
            <AnimatedLink
              href={`/projects/${prevSlug}`}
              className="text-primary-900 group-hover:text-main"
            >
              ← {prevProject.title}
            </AnimatedLink>
            <Image
              src={prevProject.img}
              alt={prevProject.title}
              width={300}
              height={200}
              loading="lazy"
              className="w-1/2 h-36 grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="w-1/2 flex justify-between items-end group">
            <Image
              src={nextProject.img}
              alt={nextProject.title}
              width={300}
              height={200}
              loading="lazy"
              className="w-1/2 h-36 grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <AnimatedLink
              href={`/projects/${nextSlug}`}
              className="text-primary-900 group-hover:text-main"
            >
              {nextProject.title} →
            </AnimatedLink>
          </div>
        </div>
      </main>

      <Footer prevPage="/projects" nextPage="/projects" />
    </>
  );
}
