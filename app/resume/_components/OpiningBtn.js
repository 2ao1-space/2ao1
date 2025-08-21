import { LuDownload } from "react-icons/lu";

export default function OpiningBtn() {
  return (
    <>
      <button
        onClick={() => opinning()}
        disabled={false}
        className="hidden md:block mt-4 text-main cursor-pointer"
      >
        [ Download CV <LuDownload className="inline-block" /> ]
      </button>
      <button
        onClick={() => opinning()}
        disabled={false}
        className="text-xs md:hidden mt-4 text-main cursor-pointer"
      >
        [ <LuDownload className="inline-block" /> ]
      </button>
    </>
  );
}
