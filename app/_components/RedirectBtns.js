import AnimatedLink from "./AnimatedLink";

export default function RedirectBtns({
  className,
  link1,
  link2,
  href1,
  href2,
  target1,
  target2,
}) {
  return (
    <div className={`${className}`}>
      <span className="redirect-btns overflow-y-hidden h-4 md:h-auto">
        <AnimatedLink href={href1} target={target1}>
          [ {link1} ]
        </AnimatedLink>
      </span>
      <span className="redirect-btns overflow-y-hidden h-4 md:h-auto">
        <AnimatedLink href={href2} target={target2}>
          [ {link2} ]
        </AnimatedLink>
      </span>
    </div>
  );
}
