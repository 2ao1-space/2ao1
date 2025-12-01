import info from "../../_data/info.json";

import MyImage from "../../_components/MyImage";
import AnimatedLink from "../../_components/AnimatedLink";

export default function SkillsSection() {
  return (
    <div className="grid grid-cols-12">
      {/* <div className="flex flex-col md:flex-row items-start justify-start gap-4 "> */}
      <div className="col-span-12 md:col-span-3 flex flex-col items-start justify-start">
        <MyImage
          loading={"lazy"}
          className="grayscale hover:grayscale-0 transition-all duration-500 w-[150px] md:w-[200px]"
        />

        <div className=" w-[150px] md:w-[200px] flex gap-2 mt-4 justify-between item-center">
          <span>
            <AnimatedLink href={info.social[1].path} target="_blank">
              {info.social[1].name}
            </AnimatedLink>
          </span>
          <span>
            <AnimatedLink href={info.social[2].path} target="_blank">
              {info.social[2].name}
            </AnimatedLink>
          </span>
        </div>
      </div>

      <div className="col-span-12 md:col-span-9 grid grid-cols-9 gap-8">
        {/* <!-- skills --> */}
        <div className="col-span-9 md:col-span-6 flex border-b border-primary-900 py-10 md:py-0 ">
          <span className="w-1/4">[ 02 ]</span>
          <div className="w-3/4 flex flex-col justify-between">
            <h3 className="text-sm md:text-2xl font-bold mb-4">Skills</h3>
            <div className="flex gap-8 justify-between text-xs md:text-base md:pb-8">
              <ul>
                {info.skills.front.map((front, index) => (
                  <li key={index}>{front}</li>
                ))}
              </ul>
              <ul>
                {info.skills.back.map((back, index) => (
                  <li key={index}>{back}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-9 md:col-span-3 flex justify-end md:justify-start indent-[4.5rem] md:indent-0 flex-col  border-b border-primary-900 pb-10 md:pb-0">
          <h3 className="text-sm md:text-2xl font-bold mb-4">Language</h3>
          <div className="flex gap-8 justify-between text-xs md:text-base">
            <ul>
              {info.skills.languages.map((language, index) => (
                <li key={index}>
                  {language.name} - {language.level}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <!-- projects --> */}
        <div className="col-span-9 flex gap-4 items-start pb-20">
          <span className="w-1/4">[ 03 ]</span>
          <div className="w-3/4">
            <h3 className="text-sm md:text-2xl font-bold mb-8">Projects</h3>
            {info.projects.map((project, index) => (
              <div key={index} className="mb-6">
                <div
                  key={index}
                  className="flex justify-between items-start py-2 border-b border-primary-900 gap-8 "
                >
                  <h5 className="text-sm md:text-base text-main">
                    <AnimatedLink
                      key={index}
                      href={`/projects/${project.title
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {project.title}
                    </AnimatedLink>
                  </h5>
                  <div className="hidden md:flex w-1/4 justify-end">
                    <span>[ {project.date} ]</span>
                  </div>
                </div>
                <p>{project.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
