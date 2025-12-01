import info from "./_data/info.json";

import Header from "./_components/Header";
import Footer from "./_components/Footer";

import InfoSection from "./Index/_components/InfoSetion";
import LastProject from "./Index/_components/LastProject";
import ContactIndex from "./Index/_components/ContactIndex";
import MyImage from "./_components/MyImage";
import ProjectImage from "./_components/ProjectImage";
import RootLayout from "./layout";
import AnimatedLink from "./_components/AnimatedLink";
import InfoTitle from "./Index/_components/InfoTitle";
import InfoContent from "./Index/_components/InfoContent";
import SectionTitle from "./_components/SectionTitle";
import Image from "next/image";
import FooterNav from "./_components/Footer/FooterNav";
import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";

export const metadata = {
  title: `${info.name} | ${info.role}`,
};

export default function page() {
  return (
    <section className="container h-screen mx-auto relative grid grid-cols-12 grid-rows-12 w-full">
      <Header heroSection={true} />
      <h1 className="text-5xl md:text-[140px] md:leading-[100px] uppercase col-start-2 md:col-start-3 row-start-3">
        Hello,
      </h1>
      <h2 className="relative text-xs md:text-xl uppercase col-start-8 md:col-start-8 row-start-3 row-span-2 col-span-4 md:col-span-3 indent-6 md:font-mainHead pl-2 md:pl-0">
        {info.heroRole}
      </h2>
      <h1 className="text-5xl md:text-[140px] md:leading-[100px] col-start-2 md:col-start-3 row-start-4 md:row-start-5">
        I'M
      </h1>
      <Image
        alt="Hero Image"
        loading="lazy"
        src={info.images.Hero}
        width="250"
        height="270"
        className="col-start-5 md:col-start-5 row-start-4 md:row-start-5 col-span-4 md:col-span-2 "
      />
      <h1 className="text-5xl md:text-[140px] md:leading-[100px] col-start-7 row-start-6 md:row-start-5">
        Omran
      </h1>
      <span className="flex flex-wrap col-start-2 md:col-start-7 col-span-4 md:col-span-1 row-start-10 pl-1 content-end text-sm">
        Latest Work <LuArrowUpRight />
      </span>

      {/* <LastProject
        src={info.projects[0].img}
        alt="Latest Project Image"
        width={320}
        height={270}
        className="col-start-6 md:col-start-8 row-start-9 md:row-start-8 col-span-6 md:col-span-3"
        href={`/projects/${info.projects[0].title
          .toLowerCase()
          .replace(" ", "-")}`}
      /> */}

      <Link
        href={`/projects/${info.projects[0].title
          .toLocaleLowerCase()
          .replace(" ", "-")}`}
        className="col-start-6 md:col-start-8 row-start-9 md:row-start-8 col-span-6 md:col-span-3"
      >
        <Image
          alt="Latest Project Image"
          loading="lazy"
          src={info.projects[0].img}
          width="320"
          height="270"
        />
      </Link>
      <p className="col-start-2 md:col-start-7 col-span-11 md:col-span-4 row-start-7 md:pl-2 mix-blend-difference text-white">
        {info.bio}
      </p>

      <span className="split-text col-start-2 md:col-start-1 row-start-12 col-span-5 md:col-span-2 text-xs md:text-sm">
        {info.studio} , 2025
        <br />© All Rights Reserved
      </span>
      <FooterNav
        prevPage="resume"
        nextPage="/about"
        className={`text-xs md:text-sm col-span-3 md:col-span-1 col-start-10 md:col-start-12 row-start-12 flex-col`}
      />
    </section>
  );
}
