import info from "../../_data/info.json";

import AnimatedLink from "../../_components/AnimatedLink";
import SectionTitle from "../../_components/SectionTitle";
import JobDesc from "./JopDesc";

export default function ExperianceSection() {
  const [expLink] = info.social.filter((link) => link.name === "Linkedin");
  const exp = info.experience;
  return (
    <section className="py-20">
      <SectionTitle
        title={"Experiance"}
        className={`font-subhead flex justify-between items-end border-b border-primary-900 `}
      >
        <AnimatedLink
          href={expLink.path}
          target="_blank"
          className="text-sm md:text-base h-6 md:h-8"
        >
          [{expLink.name}]
        </AnimatedLink>
      </SectionTitle>

      <div className="flex justify-start md:justify-end">
        <ul className="w-full md:w-1/2">
          {exp.map((exp, index) => (
            <JobDesc exp={exp} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
