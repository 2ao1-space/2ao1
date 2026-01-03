import useIntroAnimation from "../Hooks/IntroAnimation";
import Menu from "../Components/Menu";
import Title from "../Components/Title";

export default function Header() {
  const { heroRef, menuRef, pageTitleRef } = useIntroAnimation();

  return (
    <>
      <div
        ref={heroRef}
        className="fixed top-0 left-0 right-0 w-full flex flex-col justify-between overflow-hidden py-4 z-50 text-darkness bg-white/0 h-auto"
      >
        <div className="w-full flex justify-between items-start gap-4 px-4">
          <Title pageTitleRef={pageTitleRef} />

          <Menu menuRef={menuRef} />
        </div>
      </div>
    </>
  );
}
