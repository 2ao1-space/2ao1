import info from "../../_data/info.json";

import SectionTitle from "../../_components/SectionTitle";
import ProjectImage from "../../_components/ProjectImage";
import LastPContent from "./LastPContent";

export default function LastProject() {
  return (
    <section className="md:py-20 py-4">
      {/* title */}
      <SectionTitle
        title={"Latest Project"}
        href={"/projects"}
        link={"View All Work"}
      />

      <div className="md:px-32 py-2 relative">
        <div className="relative group">
          {/* last project img */}
          <ProjectImage
            src={info.projects[0].img}
            alt={info.projects[0].title}
            loading="lazy"
            className="w-full"
          />

          <LastPContent project={info.projects[0]} />
        </div>
      </div>
    </section>
  );
}
