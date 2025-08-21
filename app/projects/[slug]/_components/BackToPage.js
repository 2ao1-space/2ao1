import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

export default function BackToPage({ href }) {
  return (
    <div className="w-full py-8 ">
      <Link href={href}>
        <LuArrowLeft className="text-primary-50 hover:text-primary-900 md:text-4xl text-xl border border-primary-900 rounded-full hover:bg-primary-400 mix-blend-difference" />
      </Link>
    </div>
  );
}
