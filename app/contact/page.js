import Header from "../_components/Header";
import ContactPart from "./_components/ContactPart";
import Linkscontact from "./_components/Linkscontact";
import Footer from "../_components/Footer";

export const metadata = {
  title: "Drop me a line",
};

export default function Contact() {
  return (
    <>
      <Header />

      <ContactPart />

      <Linkscontact />

      <Footer nextPage="/" prevPage="projects" />
    </>
  );
}
