import info from "../../_data/info.json";
import MyImage from "../../_components/MyImage";

export default function StorySection() {
  return (
    <section className="grid grid-cols-8 md:grid-cols-12">
      {/* image */}
      <div className="col-span-8 md:col-span-4">
        <MyImage
          loading={"eager"}
          width={200}
          height={200}
          className={`w-24 md:w-[200px] mx-auto md:mx-0 mb-8`}
        />
      </div>

      {/* personal story */}
      <div className="col-span-8 md:col-span-6 uppercase ">
        {info.story.map((text, index) => (
          <p key={index} className="text-xs mb-4 md:text-sm">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
