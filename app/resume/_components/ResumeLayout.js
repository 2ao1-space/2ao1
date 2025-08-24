"use client";
import info from "../../_data/info.json";

import PIResume from "./PIResume";
import ResumeHeader from "./ResumeHeader";
import SectionsLayout from "./SectionsLayout";
import SkillsSection from "./SkillsSection";
import MovetoContact from "../../projects/_components/MovetoContact";

export default function ResumeLayout() {
  return (
    <>
      <main className="container mx-auto">
        {/* <!-- personal information --> */}
        <PIResume info={info} />

        {/* <!-- title --> */}
        <ResumeHeader />

        {/* <!-- experiance --> */}
        {/* <SectionsLayout num={1} title="Experience">
          {info.experience.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between items-start md:items-center py-2 border-b border-primary-900"
            >
              <p className="text-xs md:text-base ">
                <strong className="text-main font-mainHead">{exp.role}</strong>{" "}
                - {exp.name}
              </p>

              <div className="flex justify-start text-xs md:text-base">
                <span>[ {exp.period.from} ]</span> -{" "}
                <span> {exp.period.to || "Now"} </span>
              </div>
            </div>
          ))}
        </SectionsLayout> */}

        {/* <!-- education --> */}
        <SectionsLayout num={1} title="Education">
          <div className="flex flex-col md:flex-row justify-between items-start py-2 border-b border-primary-900 text-xs md:text-base">
            <div>
              <p>
                <strong className="text-main font-mainHead">
                  {info.education.uni}
                </strong>{" "}
                - {info.education.grade}
              </p>
              <p className="text-primary-600">{info.education.field}</p>
            </div>

            <div className="flex justify-start">
              <span> {info.education.date} </span>
            </div>
          </div>
        </SectionsLayout>

        {/* <!-- img --> */}
        <SkillsSection />

        {/* contact section */}
        <MovetoContact>
          I'm so social, so Whether you have a project in mind or just want to
          say hello, I'd love to hear from you. You can also use the [Contact]
          page.
        </MovetoContact>
      </main>
    </>
  );
}
