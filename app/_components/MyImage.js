import Image from "next/image";
import info from "../_data/info.json";

export default function MyImage({ className, loading, width, height }) {
  return (
    <Image
      src={info.images.Hero}
      width={width || "300"}
      height={height || "300"}
      loading={loading}
      alt={`I'm Ahmed Omran`}
      className={`${className} grayscale hover:grayscale-0 transition-all duration-500 `}
    />
  );
}
