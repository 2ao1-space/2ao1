import info from "../../_data/info.json";

export default function LifeBalance() {
  return (
    <section className="grid grid-cols-12 pb-20 md:py-20">
      <h4 className="text-xl md:text-3xl font-mainHead col-span-11 md:col-span-9">
        {info.beliefs["beyond coding"]}
      </h4>
      <div className="col-span-12 flex justify-end w-full py-8">
        <p className="w-3/4 md:w-1/2 text-base">{info.beliefs.content}</p>
      </div>
    </section>
  );
}
