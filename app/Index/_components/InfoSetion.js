import info from "../../_data/info.json";

import SocialLinks from "./SocialLinks";
import MyImage from "../../_components/MyImage";
import InfoTitle from "./InfoTitle";
import InfoContent from "./InfoContent";

export default function InfoSetion() {
  return (
    <section className="py-8 flex relative">
      <div className="w-full md:w-1/3 flex md:relative md:pl-10 absolute ">
        {/* social links */}
        <SocialLinks social={info.social} />

        {/* my image */}
        <MyImage
          loading={"eager"}
          className={` w-28 md:w-[300px] h-40 md:h-auto`}
        />
      </div>
      <div className="w-full md:w-2/3 px-4 flex flex-col justify-between relative space-y-8">
        {/* section title */}
        <InfoTitle />
        {/* information content */}
        <InfoContent
          name={info.name}
          role={info.heroRole}
          city={info.location.city}
          country={info.location.country.slice(0, 2).toUpperCase()}
        />
      </div>
    </section>
  );
}
