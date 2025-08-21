export default function SectionsLayout({ num, title, children }) {
  return (
    <div className="flex gap-4 items-start pb-20">
      <span className="w-1/4">[ 0{num} ]</span>
      <div className="w-3/4">
        <h3 className="text-sm md:text-2xl font-bold">{title}</h3>
        {children}
      </div>
    </div>
  );
}
