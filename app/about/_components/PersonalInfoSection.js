import info from "../../_data/info.json";

export default function PersonalInfoSection() {
  return (
    <section className="py-20 grid grid-cols-8 md:grid-cols-12 pb-10">
      {/* section title */}
      <div className="text-base col-span-2 md:col-span-2 text-center md:text-end">
        [ I'm ]
      </div>

      {/* personal information */}
      <div className="col-span-8 md:col-span-10 flex justify-end w-full">
        <p className="text-xl md:text-5xl capitalize indent-8 md:indent-28 mb-4 md:mb-12 font-mainHead">
          A <span className="text-main">{info.jTitle}</span> from{" "}
          {info.location.city}, I believes that{" "}
          <span className="text-main">no more</span> complexity — life's{" "}
          <span className="text-main">complicated</span> enough.
        </p>
      </div>
    </section>
  );
}
