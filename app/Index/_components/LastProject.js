"use client";
import { gsap } from "gsap";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LastProject({
  src,
  alt,
  href,
  width,
  height,
  className,
}) {
  const imgRef = useRef(null);
  const router = useRouter();

  const handleClick = () => {
    const img = imgRef.current;
    const rect = img.getBoundingClientRect();

    // Fix the image so we can animate globally
    gsap.set(img, {
      position: "fixed",
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
      zIndex: 9999,
    });

    // Animation to full screen
    gsap.to(img, {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      duration: 0.6,
      ease: "power3.out",
      onComplete: () => {
        router.push(href);
      },
    });
  };

  return (
    <Image
      ref={imgRef}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className + " cursor-pointer object-cover"}
      onClick={handleClick}
    />
  );
}
