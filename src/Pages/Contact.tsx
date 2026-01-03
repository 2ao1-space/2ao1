import { LuArrowUpRight } from "react-icons/lu";
import info from "../Data/Info.json";
import AnimatedBtn from "../Components/AnimatedBtn";

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen px-4  overflow-hidden grid grid-cols-12 grid-rows-12"
    >
      <p className="aboutContent col-start-2 row-start-3 col-span-3">
        {info.hero.headline}
      </p>

      <h4 className="aboutContent col-start-2 row-start-5 col-span-1 font-SecFont text-darkness uppercase">
        The value I offer you :
      </h4>

      <ol className="text-md col-start-3 row-start-5 col-span-3">
        {info.values.map((step, i) => (
          <li key={i} className="aboutContent  font-SecFont ">
            - {step}
          </li>
        ))}
      </ol>

      <div className="col-start-11 row-start-3 col-span-2 space-y-2">
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
        <ul className="flex flex-col items-start space-y-2">
          {info.meta.social.map((link, i) => (
            <li key={i} className="uppercase aboutContent">
              <AnimatedBtn href={link.url} target="_blank">
                {link.name}
              </AnimatedBtn>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex flex-col justify-center col-start-3 col-span-8 row-start-8 row-span-4 relative">
        <div className="flex justify-between">
          <h4 className="text-start text-3xl aboutContent">
            {info.footer.cta}
          </h4>

          <LuArrowUpRight className="absolute -right-2 top-14 text-5xl aboutContent" />
        </div>
        <AnimatedBtn
          height={"h-[160px]"}
          href={info.meta.email.url}
          target="_blank"
          className="text-[88px] aboutContent"
        >
          {info.meta.email.name}
        </AnimatedBtn>
      </div>

      <footer className="col-start-3 row-start-12 col-span-8 flex justify-between text-xs capitalize">
        <span>By 2ao1 @2025</span>
        <span>© All Rights Reserved</span>
      </footer>
    </section>
  );
}
