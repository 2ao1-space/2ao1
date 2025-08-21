export default function HeaderSections({ title, children, className }) {
  return (
    <div className={`overflow-hidden ${className} `}>
      <span className="capitalize text-sm md:text-xs text-secondary-500 split-text">
        {title}
      </span>
      {children}
    </div>
  );
}
