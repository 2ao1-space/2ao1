import info from "../Data/Info.json";

export default function AboutContent() {
  return (
    <div className="w-2/3 space-y-10 px-20 ">
      <h4 className="aboutContent text-[200px] h-50 font-Become text-darkness uppercase whitespace-nowrap">
        About me
      </h4>
      <div className=" text-[30px] font-SecFont text-darkness">
        <p className="aboutContent">
          Hi, I'm {info.meta.name} a {info.meta.title} based in{" "}
          {info.meta.location.city}.
        </p>
        {info.about.description.map((content, i) => (
          <p key={i} className="aboutContent">
            {content}
          </p>
        ))}
      </div>
      <h4 className="aboutContent text-[200px] h-50 font-Become text-darkness uppercase whitespace-nowrap">
        how I work
      </h4>
      <ol className="space-y-4">
        {info.howIWork.map((step, i) => (
          <li key={i} className="aboutContent text-[20px] font-SecFont ">
            {i + 1} - {step}
          </li>
        ))}
      </ol>
    </div>
  );
}
