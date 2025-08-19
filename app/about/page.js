import Image from "next/image";
import info from "../_data/info.json";
import AnimatedLink from "../_components/AnimatedLink";
import Footer from "../_components/Footer";

export const metadata = {
  title: `Who is ${info.name}`,
};

export default function About() {
  return (
    <>
      <section className="container mx-auto py-20">
        {/* <!-- Hero Section --> */}
        <section className="grid grid-cols-12 pb-10">
          <div className="col-span-2 text-end">[ I'm ]</div>
          <div className="col-span-10 flex justify-end w-full">
            <p className="text-5xl capitalize indent-28 mb-12 font-mainHead">
              A <span className="text-main">{info.jTitle}</span> from{" "}
              {info.location.city}, I believes that{" "}
              <span className="text-main">no more</span> complexity — life's
              <span className="text-main">complicated</span> enough.
            </p>
          </div>
        </section>

        {/* <!-- Personal Story --> */}
        <section className="grid grid-cols-12">
          <div className="col-span-4">
            <Image
              src={info.images.Hero}
              alt={`i'm ahmed omran`}
              loading={"eager"}
              width={200}
              height={200}
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="col-span-6 uppercase text-sm">
            {info.story.map((text) => (
              <p className="mb-4">{text}</p>
            ))}
          </div>
        </section>

        {/* <!-- Experiance section --> */}
        <section className="grid grid-cols-12 py-20">
          <div
            class={`col-span-12 font-subhead py-4 flex justify-between items-end border-b border-primary-900`}
          >
            <h5 class="text-6xl">Experiance</h5>

            {info.social
              .filter((link) => link.name === "Linkedin")
              .map((item) => (
                <AnimatedLink href={item.path} target="_blank">
                  [{item.name}]
                </AnimatedLink>
              ))}
          </div>

          <div className="col-span-12 flex justify-end">
            <ul className="w-1/2">
              {info.experiance.map((exp) => (
                <li className="border-b border-primary-900 py-6 flex gap-12 justify-between">
                  <div className="flex flex-col w-1/3">
                    <span className="uppercase text-xs text-secondary-500">
                      Company
                    </span>
                    <div className="flex justify-start items-center">
                      <AnimatedLink href={exp.url} target="_blank">
                        {exp.name}
                      </AnimatedLink>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/3">
                    <span className="uppercase text-xs text-secondary-500">
                      Position
                    </span>
                    <p>{exp.role}</p>
                  </div>
                  <div className="flex flex-col w-1/3">
                    <span className="uppercase text-xs text-secondary-500">
                      Period
                    </span>
                    <p>
                      {exp.period.from} - {exp.period.to}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section class="grid grid-cols-12">
          <h4 class="text-3xl font-mainHead col-span-9">
            {info.beliefs["beyond coding"]}
          </h4>
          <div class="col-span-12 flex justify-end w-full py-8">
            <p class="w-1/2">{info.beliefs.content}</p>
          </div>
        </section>
      </section>

      {/* about footer */}
      <Footer nextPage="/projects" prevPage="/" />
    </>
  );
}
