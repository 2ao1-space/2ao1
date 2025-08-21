import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

export default function BackToPage({ href }) {
  return (
    <div className="w-full py-8">
      <Link href={href}>
        <LuArrowLeft />
      </Link>
    </div>
  );
}
