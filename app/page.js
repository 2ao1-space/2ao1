import Header from "./_components/Header";
import Footer from "./_components/Footer";
import LinkList from "./_components/LinkList";
import AnimatedLink from "./_components/AnimatedLink";
import info from "./_data/info";
import Image from "next/image";
export default function page() {
  return (
    <>
      {/* <!-- Info Section --> */}
      <section className="container mx-auto py-8 flex">
        <div className="w-1/3 flex relative pl-10">
          <div className="-rotate-90 border-b flex justify-between items-center absolute top-[198px] left-[-199px] w-[428px] h-8 text-xs border-primary-900">
            <LinkList
              items={info.social}
              className="w-full justify-between items-center"
            />
          </div>
          <Image
            src="/images/Hero.jpg"
            width="300"
            height="300"
            loading={"eager"}
            alt="ahmed omran"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="w-2/3 px-4 flex flex-col justify-between">
          <div className="flex justify-start items-center py-8">
            <AnimatedLink
              href="/about"
              className="text-sm flex items-center gap-1"
            >
              [ Who I'm ? ]
            </AnimatedLink>
          </div>

          <p className="text-5xl font-mainHead indent-32 leading-[4rem]">
            My name is {info.name}. I'm a{" "}
            <span className="text-main">{info.heroRole}</span> From in{" "}
            {info.location.city} (
            {info.location.country.slice(0, 2).toUpperCase()}).
          </p>
        </div>
      </section>

      {/* <!-- Last Projects --> */}
      <section className="container mx-auto py-20">
        <div className="w-full flex justify-between items-center border-b border-primary-900 mb-8">
          <h4 className="text-6xl">Latest Project</h4>
          <AnimatedLink href="/projects">[ View All Work ]</AnimatedLink>
        </div>
        <div className="md:px-32 py-8 relative">
          <div className="relative group">
            <Image
              src={info.projects[0].img}
              alt={info.projects[0].title}
              loading="lazy"
              className="w-full grayscale group-hover:grayscale-0 transition-all duration-500"
              width={600}
              height={400}
            />
            <div
              className="absolute inset-0 p-4 sm:p-6 lg:p-8 text-tertiary text-sm font-subhead flex flex-col
               opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "rgba(0,0,0,0.6)" }}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div className="flex flex-col sm:flex-row justify-start items-start gap-4">
                  <div className="flex flex-col">
                    <span className="overlay-text text-xs text-secondary-400">
                      Company
                    </span>
                    <span className="overlay-text">
                      [ {info.projects[0].client} ]
                    </span>
                  </div>
                  <div className="sm:ml-4 sm:border-l sm:pl-4">
                    <span className="overlay-text text-xs text-secondary-400">
                      Category
                    </span>
                    <ul>
                      {info.projects[0].type.map((t, index) => (
                        <li key={index} className="overlay-text">
                          [ {t} ]
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-1/3">{info.projects[0].description}</div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end flex-1 gap-4 mt-4">
                <h5 className="overlay-text text-3xl sm:text-4xl lg:text-6xl xl:text-8xl font-subhead">
                  {info.projects[0].title}
                </h5>
                <AnimatedLink
                  href={`/projects/${info.projects[0].title
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  [ View Case ]
                </AnimatedLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Contact sections --> */}
      <section className="px-4 py-20 container mx-auto flex flex-col items-center">
        <div className="w-full flex justify-between items-center border-b border-primary-900 mb-8">
          <h4 className="text-6xl">Let's Talk</h4>
          <AnimatedLink href="/contact">[ drop me a line ]</AnimatedLink>
        </div>

        {/* <!-- Hero Text --> */}
        <h1
          id="title"
          className="font-mainHead text-4xl sm:text-6xl lg:text-8xl xl:text-[5rem] leading-tight lg:leading-[6rem] text-center py-10 lg:py-16"
        >
          YOUR VISION. MY CODE. <span className="text-main">EXTRAORDINARY</span>{" "}
          RESULTS.
        </h1>

        {/* <!-- redirect buttons --> */}
        <div className="w-full flex flex-col justify-end gap-4 items-end text-sm font-subhead capitalize overflow-y-hidden space-y-8">
          <p id="title" className="w-1/4">
            I'm so social, so Whether you have a project in mind or just want to
            say hello, I'd love to hear from you. You can also use the [Contact]
            page.
          </p>
          <div className="flex justify-end items-center gap-4">
            <span className="redirect-btns overflow-y-hidden">
              <AnimatedLink href="mailto:omran.a.jr@gmail.com" target="_blank">
                [ {info.email} ]
              </AnimatedLink>
            </span>
            <span className="redirect-btns overflow-y-hidden">
              <AnimatedLink href="/contact">[ Contact ]</AnimatedLink>
            </span>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer prevPage="resume" nextPage="/about" />
    </>
  );
}
