import AnimatedLink from "./AnimatedLink";

export default function SectionTitle({
  title,
  link,
  href,
  className,
  children,
}) {
  return (
    <div
      className={`${className} w-full flex justify-between items-center border-b border-primary-900 md-2 md:mb-8`}
    >
      <h4 className="text-xl md:text-6xl font-bold">{title}</h4>
      {children ? (
        children
      ) : (
        <AnimatedLink href={href} className="text-sm md:text-base h-8">
          [ {link} ]
        </AnimatedLink>
      )}
    </div>
  );
}
