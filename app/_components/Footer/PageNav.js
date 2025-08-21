import AnimatedLink from "../AnimatedLink";

export default function PageNav({ link, children, target }) {
  return (
    <AnimatedLink href={link} target={target}>
      <span className="split-text">{children}</span>
    </AnimatedLink>
  );
}
