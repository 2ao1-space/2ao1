import AnimatedLink from "../../_components/AnimatedLink";

export default function JopDesc({ key, exp }) {
  return (
    <li
      key={key}
      className="border-b border-primary-900 py-2 md:py-6 flex flex-col md:flex-row flex-wrap"
    >
      <div className="flex justify-between  md:w-2/3">
        {/* company name */}
        <div className="flex flex-col w-1/2 md:w-1/3">
          <span className="uppercase text-xs text-secondary-500">Company</span>
          <div className="flex justify-start items-center">
            <AnimatedLink href={exp.url} target="_blank">
              {exp.name}
            </AnimatedLink>
          </div>
        </div>

        {/* project time */}
        <div className="flex flex-col w-1/2 md:w-1/3">
          <span className="uppercase text-xs text-secondary-500">
            Timeframe
          </span>
          <p>
            {exp.period.from} - Now
            {/* {exp.period.to} */}
          </p>
        </div>
      </div>

      {/* my role in project */}
      <div className="flex flex-col w-full md:w-1/3">
        <span className="uppercase text-xs text-secondary-500">Position</span>
        <p>{exp.role}</p>
      </div>
    </li>
  );
}
