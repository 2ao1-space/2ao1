export default function ProjectSpan({ title, project, className }) {
  return (
    <div className="col-span-1 py-4 border-b">
      <span className="text-xs text-slate-500 capitalize">{title}</span>
      <h5 className={className}>
        {project}
        {title === "Created" && (
          <sup className="text-xs text-main">[ DEV ]</sup>
        )}
      </h5>
    </div>
  );
}
