import info from "../Data/Info.json";

export default function PaginationBtns({
  carouselActive,
  setActiveIndex,
  activeIndex,
}: {
  carouselActive: boolean;
  setActiveIndex: (index: number) => void;
  activeIndex: number;
}) {
  return (
    <>
      {carouselActive && (
        <div
          className={`absolute ${
            innerWidth < 450
              ? "bottom-20"
              : innerWidth < 770
              ? "bottom-5"
              : "bottom-10"
          }  left-1/2 -translate-x-1/2 flex gap-3 z-50`}
        >
          {info.projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              onMouseDown={(e) => e.stopPropagation()}
              className={`h-3 rounded-full transition-all ${
                i === activeIndex ? "bg-darkness w-12" : "bg-darkness/40 w-3"
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
}
