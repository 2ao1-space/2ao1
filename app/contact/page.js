import Header from "../_components/Header";
import ContactPart from "./_components/ContactPart";
import Linkscontact from "./_components/Linkscontact";
import Footer from "../_components/Footer";

export const metadata = {
  title: "Drop me a line",
};

export default function Contact() {
  return (
    <div className="h-screen grid grid-cols-12 grid-rows-12">
      <Header />

      <ContactPart className="col-span-12 row-span-6" />

      <Linkscontact className=" col-start-1 col-span-12 md:col-start-10 md:col-span-3 row-span-2 row-start-9" />

      <Footer
        nextPage="/"
        prevPage="projects"
        className="col-span-12 row-span-1 row-start-12"
      />
    </div>
  );
}
