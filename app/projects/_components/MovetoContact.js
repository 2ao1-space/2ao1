import { LuArrowUpRight } from "react-icons/lu";
import AnimatedLink from "../../_components/AnimatedLink";

export default function MovetoContact({ children }) {
  return (
    <div className="py-20 flex flex-col justify-center items-center relative space-y-8">
      <div className="flex">
        <h1 className="text-5xl md:text-9xl font-mainHead">Let's Talk</h1>
        <sup>
          <LuArrowUpRight className="text-2xl md:text-6xl text-main" />
        </sup>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-end justify-end space-y-4">
        <p className="w-3/4 md:w-1/2">{children}</p>
        <AnimatedLink
          href="/contact"
          className="text-sm flex items-center gap-1"
        >
          [ Send Message ]
        </AnimatedLink>
      </div>
    </div>
  );
}
