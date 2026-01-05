import info from "../Data/Info.json";
import ImgCard from "../Components/ImgCard";
import SocialBar from "../Components/SocialBar";
import AnimatedBtn from "../Components/AnimatedBtn";
import useAboutAnimation from "../Hooks/AboutAnimation";
import SubTitle from "../Components/SubTitle";
import AboutContent from "../Components/AboutContent";
import { useMemo } from "react";

export default function About() {
  const { aboutRef, imageRef } = useAboutAnimation();

  const imageDimensions = useMemo(() => {
    if (typeof window === "undefined") {
      return { width: "100%", height: "100%" };
    }

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Mobile
    if (width < 425) {
      return { width: "250px", height: "350px" };
    }
    // Tablet
    else if (width < 768) {
      return { width: "250px", height: "350px" };
    }
    // Desktop
    else if (height <= 800) {
      return { width: "300px", height: "400px" };
    }
    // Desktop
    else if (height <= 1000) {
      return { width: "320px", height: "460px" };
    }
    // Desktop
    else {
      return { width: "350px", height: "900px" };
    }
  }, []);

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = info.meta.siteMap[0].path;
    link.download = "Ahmed_Omran_Junior_Frontend_Developer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-4">
      <SocialBar />
      <SubTitle />

      <div
        className={`flex flex-col sm:flex-row relative ${
          window.innerWidth < 768 ? "pt-0 gap-20" : "pt-20"
        } pb-50`}
      >
        <div
          ref={aboutRef}
          className="w-full sm:w-1/3 mt-0 md:-mt-80 px-4 sm:px-4 lg:px-32 relative"
          style={{
            height: imageDimensions.height,
          }}
        >
          <ImgCard
            imgRef={imageRef}
            className="w-full md:w-100 object-cover"
            imageSrc={info.meta.image}
            containerHeight={imageDimensions.height}
            containerWidth={imageDimensions.width}
            imageHeight={imageDimensions.height}
            imageWidth={imageDimensions.width}
            rotateAmplitude={12}
            scaleOnHover={1}
            showMobileWarning={false}
          />

          <div className="flex justify-between items-center py-2 w-full">
            <AnimatedBtn
              href={info.meta.social[0].url}
              target="_blank"
              className="uppercase"
            >
              {info.meta.social[0].name}
            </AnimatedBtn>

            <AnimatedBtn
              href={info.meta.siteMap[0].path}
              target="_blank"
              onClick={handleDownloadCV}
            >
              DOWNLOAD CV
            </AnimatedBtn>
          </div>
        </div>

        <AboutContent />
      </div>
    </div>
  );
}
