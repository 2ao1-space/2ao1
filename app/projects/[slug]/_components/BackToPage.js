import Link from "next/link";
import { LuArrowLeft, LuArrowLeftToLine, LuChevronLeft } from "react-icons/lu";
import AnimatedLink from "../../../_components/AnimatedLink";

export default function BackToPage({ href }) {
  return (
    <div className="w-full py-8 flex justify-start items-center">
      <Link href={href} className="flex justify-start items-center ">
        <LuChevronLeft />
        {/* <LuArrowLeft className="text-primary-50 hover:text-primary-900 md:text-4xl text-xl border border-primary-900 rounded-full hover:bg-primary-400 mix-blend-difference" /> */}
        Back
      </Link>
    </div>
  );
}
