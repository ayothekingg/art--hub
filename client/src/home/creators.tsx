import React, { useEffect, useState } from "react";
import creatorImg1 from "../assets/creators/creator.png";
import creatorImg2 from "../assets/creators/creator2.png";
import creatorImg3 from "../assets/creators/creator3.png";

const creatorImages = [creatorImg1, creatorImg2, creatorImg3];

const CreatorsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % creatorImages.length);
        setAnimate(true);
      }, 50);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <section className="h-[251px] md:min-h-[922px] flex flex-col items-start bg-[#E2E2E2] relative">
      <div className="hidden md:flex flex-row items-start absolute top-[60px] right-12 z-10">
        <div className="h-[296px] w-2.5 rounded-full bg-[#AEAEAE] overflow-hidden flex flex-col items-center justify-start mr-10 rotate-180">
          <div className="w-full h-12 bg-[#292929] rounded-full transition-all duration-300" />
        </div>

        <div className="flex flex-col mr-26 mt-2 justify-between text-[40px] text-[#333333] clash-normal h-[296px]">
          <span className="mb-2">Editorial</span>
          <span className="mb-2">Fashion</span>
          <span className="mb-2">Lifestyle</span>
          <span>Blueprint</span>
        </div>
      </div>

      <div className="flex md:hidden absolute right-0 z-10 w-[180px] overflow-hidden">
        <div className="flex flex-row items-center gap-2 whitespace-nowrap text-[9px] text-[#333333] clash-normal">
          <span>Editorial</span>
          <span className="mx-1 text-xl">•</span>
          <span>Fashion</span>
          <span className="mx-1 text-xl">•</span>
          <span>Lifestyle</span>
        </div>
      </div>

      <h2
        className="text-[24px] md:text-[55px] ml-5 md:ml-[90px] mt-3 md:mt-20 mb-20 clash-bold"
        style={{ color: "#333" }}
      >
        TOP CREATORS OF <br /> THE WEEK
      </h2>
      <h1
        className="text-[13px] md:text-[32px] ml-5  md:ml-[90px] -mt-15 md:mt-30 mr-10 md:mr-[230px] clash"
        style={{ color: "#333" }}
      >
        “Everything always looked better in black and white. Everything always
        as if it were the first time; there’s always more people in a black and
        white photograph. It just makes it seem that there were more people at a
        gig, more people at a football match, than with colour photography.
        Everything looks more exciting.” – Jack Lowden
      </h1>
      <img
        src={creatorImages[currentIndex]}
        alt="Creator"
        className={`block absolute right-15 md:right-60 -bottom-15 md:-bottom-70 w-[237px] h-60 md:w-[826px] md:h-auto object-contain z-20${
          animate ? " creator-fade-in" : ""
        }`}
      />
      <span className="block absolute right-5 md:right-41 bottom-15 md:bottom-58 text-[32px] md:text-[70px] text-[#161616] clash-extrabold z-10 select-none opacity-60">
        CIRCA
      </span>
      <span className="block absolute right-5 md:right-41 -bottom-4 md:bottom-8 text-[64px] md:text-[170px] text-[#161616] clash-extrabold z-10 select-none line-through text-decoration-color-[#161616] overlay-text text-decoration-thickness-[20px]">
        1985
      </span>
    </section>
  );
};

export default CreatorsSection;
