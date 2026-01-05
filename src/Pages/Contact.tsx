import { LuArrowUpRight } from "react-icons/lu";
import info from "../Data/Info.json";
import AnimatedBtn from "../Components/AnimatedBtn";

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen px-4 overflow-hidden grid grid-cols-12 grid-rows-12"
    >
      <p className="aboutContent col-start-1 lg:col-start-2 row-start-2 sm:row-start-3 lg:row-start-3 col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-3">
        {info.hero.headline}
      </p>

      <h4 className="aboutContent col-start-1 sm:col-start-7 md:col-start-7 lg:col-start-5 row-start-4 sm:row-start-3 md:row-start-3 lg:row-start-3 col-span-5 sm:col-span-4 md:col-span-2 lg:col-span-1 font-SecFont text-darkness uppercase">
        The value I offer you :
      </h4>

      <ol className="text-sm md:text-md col-start-1 sm:col-start-7 md:col-start-8 lg:col-start-6 row-start-5 sm:row-start-4 md:row-start-4 lg:row-start-4 col-span-12 md:col-span-5 lg:col-span-3">
        {info.values.map((step, i) => (
          <li key={i} className="aboutContent font-SecFont ">
            - {step}
          </li>
        ))}
      </ol>

      <div className="col-start-7 sm:col-start-10 md:col-start-10 lg:col-start-11 row-start-8 sm:row-start-8 md:row-start-9 lg:row-start-3 col-span-12 md:col-span-2 lg:col-span-2 lg:space-y-2 text-sm lg:text-base md:pl-4">
        <p className="aboutContent">
          {info.meta.location.city}, {info.meta.location.country}
        </p>
        <AnimatedBtn
          href={info.meta.phone.url}
          target="_blank"
          className="aboutContent"
        >
          {info.meta.phone.name}
        </AnimatedBtn>
        <ul className="flex flex-col items-start lg:space-y-2">
          {info.meta.social.map((link, i) => (
            <li key={i} className="uppercase aboutContent">
              <AnimatedBtn href={link.url} target="_blank">
                {link.name}
              </AnimatedBtn>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex flex-col justify-center col-start-1 sm:col-start-2 md:col-start-2 lg:col-start-3 col-span-12 sm:col-span-8 md:col-span-8 lg:col-span-8 row-start-10 sm:row-start-8 md:row-start-8 lg:row-start-8 row-span-2 sm:row-span-3 lg:row-span-4 relative">
        <div className="flex justify-between">
          <h4 className="text-start text-base lg:text-3xl w-full aboutContent">
            {info.footer.cta}
          </h4>

          <LuArrowUpRight className="absolute right-0 sm:right-4 md:-right-2 top-10 sm:top-6 md:top-6 lg:top-14 text-xl md:text-[40px] lg:text-5xl aboutContent" />
        </div>
        <AnimatedBtn
          height={
            innerWidth < 450
              ? "h-[50px]"
              : innerWidth < 800
              ? "h-[90px]"
              : "h-[160px]"
          }
          href={info.meta.email.url}
          target="_blank"
          className="text-[28px] sm:text-[42px] md:text-[48px] lg:text-[88px] aboutContent"
        >
          {info.meta.email.name}
        </AnimatedBtn>
      </div>

      <footer className="col-start-1 sm:col-start-2 lg:col-start-3 row-start-12 col-span-12 sm:col-span-10 lg:col-span-8 flex justify-between text-xs capitalize">
        <span>By 2ao1 @2025</span>
        <span>© All Rights Reserved</span>
      </footer>
    </section>
  );
}
