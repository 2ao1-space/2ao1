import info from "../_data/info.json";

import Header from "../_components/Header";
import Pagetitle from "./_components/Pagetitle";
import LastOne from "./_components/lastOne";
import AllProjects from "./_components/AllProjects";
import MovetoContact from "./_components/MovetoContact";
import Footer from "../_components/Footer";

export const metadata = {
  title: `All Projects [${info.projects.length}]`,
};

export default function Projects() {
  const projects = info.projects;
  const allProjects = projects.slice(1, 7);
  return (
    <>
      {/* Header */}
      <Header />

      {/* Page Title */}
      <Pagetitle projects={projects} />

      {/* <!-- projects --> */}
      <div className="py-10 md:py-20">
        {/* <!-- Last project --> */}
        <LastOne projects={projects} />

        {/* <!-- All projects --> */}
        <AllProjects allProjects={allProjects} />
      </div>

      {/* <!-- contact section --> */}
      <MovetoContact>
        <span className="text-main">Ready</span> to bring your vision to life?
        I'm here to discuss your next <span className="text-main">project</span>{" "}
        and create something <span className="text-main">exceptional</span>{" "}
        together.
      </MovetoContact>

      <Footer prevPage="/about" nextPage="/contact" />
    </>
  );
}
