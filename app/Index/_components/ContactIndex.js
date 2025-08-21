import info from "../../_data/info.json";

import SectionTitle from "../../_components/SectionTitle";
import RedirectBtns from "../../_components/RedirectBtns";

export default function ContactIndex() {
  return (
    <section className="md:py-20 flex flex-col items-center">
      {/* title */}
      <SectionTitle
        title={"Let's Talk"}
        href={"/contact"}
        link={"drop me a line"}
      />

      {/* Hero Text */}
      <h1
        id="title"
        className="font-mainHead text-xl sm:text-6xl lg:text-8xl xl:text-[5rem] leading-tight lg:leading-[6rem] text-center py-10 lg:py-16"
      >
        YOUR VISION. MY CODE. <span className="text-main">EXTRAORDINARY</span>{" "}
        RESULTS.
      </h1>

      {/* redirect buttons */}
      <div className="w-full flex flex-col justify-end gap-4 items-center md:items-end text-xs md:text-sm font-subhead capitalize overflow-y-hidden space-y-4 md:space-y-8 pb-8 ">
        <p id="title" className="md:w-1/4 text-center md:text-start">
          I'm so social, so Whether you have a project in mind or just want to
          say hello, I'd love to hear from you. You can also use the [Contact]
          page.
        </p>

        <RedirectBtns
          link1={info.email}
          href1={"mailto:omran.a.jr@gmail.com"}
          target1={"_blank"}
          link2={"Contact"}
          href2={"/contact"}
          target2={"_self"}
          className="flex justify-start md:justify-end items-center gap-4 "
        />
      </div>
    </section>
  );
}
