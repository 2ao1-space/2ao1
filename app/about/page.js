import info from "../_data/info.json";

import Header from "../_components/Header";
import PersonalInfoSection from "./_components/PersonalInfoSection";
import StorySection from "./_components/StorySection";
import ExperianceSection from "./_components/ExperianceSection";
import LifeBalance from "./_components/LifeBalance";
import Footer from "../_components/Footer";

export const metadata = {
  title: `Who is ${info.name}`,
};

export default function About() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* <!-- Hero Section --> */}
      <PersonalInfoSection />

      {/* <!-- Personal Story --> */}
      <StorySection />

      {/* <!-- Experiance section --> */}
      <ExperianceSection />

      {/* work lifw balance : knowing about my live in my free time  */}
      <LifeBalance />

      {/* about footer */}
      <Footer nextPage="/projects" prevPage="/" />
    </>
  );
}
