import info from "../Data/Info.json";
import useSubtitleAnimation from "../Hooks/subtitleAnimation";

export default function SubTitle() {
  const { subTitleRef, marqueeRef } = useSubtitleAnimation();

  return (
    <section ref={subTitleRef} className="marquee-section overflow-hidden z-0">
      <div
        ref={marqueeRef}
        className="marquee__inner text-[400px] leading-95 uppercase h-72 font-Become whitespace-nowrap  overflow-hidden"
      >
        <span>{info.meta.title}</span>
      </div>
    </section>
  );
}
