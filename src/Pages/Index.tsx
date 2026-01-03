import { Outlet } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Index() {
  return (
    <main className="bg-tertiary text-darkness pt-70 overflow-hidden">
      <section id="about" className="pt-10">
        <About />
      </section>
      <section id="projects" className="relative overflow-hidden">
        <Projects />
        <Outlet />
      </section>
      <section id="contact" className="h-screen">
        <Contact />
      </section>
    </main>
  );
}
