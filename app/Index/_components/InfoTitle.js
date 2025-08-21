import { LuArrowUpRight } from "react-icons/lu";
import AnimatedLink from "../../_components/AnimatedLink";

export default function InfoTitle() {
  return (
    <div className="flex justify-end md:justify-start items-center py-8">
      <AnimatedLink href="/about" className="text-sm flex items-start gap-1">
        [ Who I'm ]
        <sup>
          <LuArrowUpRight className="inline-block" />
        </sup>
      </AnimatedLink>
    </div>
  );
}
