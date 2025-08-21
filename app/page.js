import info from "./_data/info.json";

import Header from "./_components/Header";
import Footer from "./_components/Footer";

import InfoSection from "./Index/_components/InfoSetion";
import LastProject from "./Index/_components/LastProject";
import ContactIndex from "./Index/_components/ContactIndex";

export const metadata = {
  title: `${info.name} | ${info.role}`,
};

export default function page() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* <!-- Info Section --> */}
      <InfoSection />

      {/* <!-- Last Projects --> */}
      <LastProject />

      {/* <!-- Contact sections --> */}
      <ContactIndex />
      {/* footer */}
      <Footer prevPage="resume" nextPage="/about" />
    </>
  );
}
