import info from "../Data/Info.json";

export default function AboutContent() {
  return (
    <div className="w-full sm:w-2/3 md:w-2/3 space-y-10 px-4 sm:px-8 md:px-20 lg:px-8 ">
      <h4 className="aboutContent text-7xl md:text-[100px] lg:text-[200px] h-20 md:h-30 lg:h-50 font-Become text-darkness uppercase whitespace-nowrap">
        About me
      </h4>
      <div className="text-base md:text-[20px] lg:text-[30px] font-SecFont text-darkness">
        <p className="aboutContent mb-4">
          Hi, I'm {info.meta.name} a {info.meta.title} based in{" "}
          {info.meta.location.city}.
        </p>
        {info.about.description.map((content, i) => (
          <p key={i} className="aboutContent mb-4">
            {content}
          </p>
        ))}
      </div>
      <h4 className="aboutContent text-7xl md:text-[100px] lg:text-[200px] h-20 md:h-30 lg:h-50 font-Become text-darkness uppercase whitespace-nowrap">
        how I work
      </h4>
      <ol className="space-y-4">
        {info.howIWork.map((step, i) => (
          <li
            key={i}
            className="aboutContent text-base md:text-[20px] lg:text-[30px] font-SecFont "
          >
            {i + 1} - {step}
          </li>
        ))}
      </ol>
    </div>
  );
}
