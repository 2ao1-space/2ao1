import Image from "next/image";

export default function ProjectImage({ src, alt, className, loading }) {
  return (
    <Image
      src={src}
      alt={alt}
      loading={loading}
      className={`${className} w-full grayscale group-hover:grayscale-0 transition-all duration-500`}
      width={600}
      height={400}
    />
  );
}
