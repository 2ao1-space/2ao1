import info from "../Data/Info.json";
import AnimatedBtn from "./AnimatedBtn";

export default function SocialBar() {
  return (
    <div className=" justify-between uppercase px-4 py-4 hidden md:flex ">
      <span className="socialLink">
        {info.meta.location.city}, {info.meta.location.country.slice(0, 2)}
      </span>
      <AnimatedBtn
        href={info.meta.email.url}
        target="_blank"
        className="socialLink"
      >
        {info.meta.email.name}
      </AnimatedBtn>
      <AnimatedBtn
        href={info.meta.social[0].url}
        target="_blank"
        className="socialLink"
      >
        github
      </AnimatedBtn>
      <AnimatedBtn
        href={info.meta.social[1].url}
        target="_blank"
        className="socialLink"
      >
        linkedin
      </AnimatedBtn>
    </div>
  );
}
