import info from "../Data/Info.json";

import ImgCard from "../Components/ImgCard";
import SocialBar from "../Components/SocialBar";
import AnimatedBtn from "../Components/AnimatedBtn";

import useAboutAnimation from "../Hooks/AboutAnimation";
import SubTitle from "../Components/SubTitle";
import AboutContent from "../Components/AboutContent";

export default function About() {
  const { aboutRef, imageRef } = useAboutAnimation();

  return (
    <div className="pt-4 ">
      <SocialBar />

      <SubTitle />

      <div className="flex relative pt-20 pb-50">
        <div ref={aboutRef} className="w-150 -mt-80 px-32 relative">
          <ImgCard
            imgRef={imageRef}
            className="w-100 object-cover"
            imageSrc={info.meta.image}
            containerHeight="460px"
            containerWidth="320px"
            imageHeight="460px"
            imageWidth="320px"
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
              onClick={(e) => {
                e.preventDefault();
                const link = document.createElement("a");
                link.href = `${info.meta.siteMap[0].path}`;
                link.download = "Ahmed_Omran_Junior_Frontend_Developer";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
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
