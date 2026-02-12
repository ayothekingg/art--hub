import React, { useEffect, useState } from "react";
import creatorImg1 from "@/assets/creators/creator.png";
import creatorImg2 from "@/assets/creators/creator2.png";
import creatorImg3 from "@/assets/creators/creator3.png";

const creatorImages = [creatorImg1, creatorImg2, creatorImg3];
const categories = ["Editorial", "Fashion", "Lifestyle", "Blueprint"];

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

  const progressHeight = ((currentIndex + 1) / creatorImages.length) * 100;

  return (
    <section className="h-62.75 md:min-h-230.5 flex flex-col items-start bg-[#E2E2E2] relative overflow-hidden">
      {/* Desktop Categories with Progress Bar */}
      <div className="hidden md:flex flex-row items-start absolute top-15 right-12 z-10">
        <div className="h-74 w-2.5 rounded-full bg-[#AEAEAE] overflow-hidden flex flex-col items-center justify-start mr-10 rotate-180">
          <div 
            className="w-full bg-[#292929] rounded-full transition-all duration-300"
            style={{ height: `${progressHeight}%` }}
          />
        </div>

        <div className="flex flex-col mr-26 mt-2 justify-between text-[40px] text-[#333333] clash-normal h-74">
          {categories.map((category, idx) => (
            <span key={category} className={idx < categories.length - 1 ? "mb-2" : ""}>
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile Categories */}
      <div className="flex md:hidden absolute right-0 top-2 z-10 px-2">
        <div className="flex flex-row items-center gap-2 text-[9px] text-[#333333] clash-normal">
          {categories.slice(0, 3).map((category, idx) => (
            <React.Fragment key={category}>
              <span>{category}</span>
              {idx < 2 && <span className="text-xl">•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Title */}
      <h2 className="text-[24px] md:text-[55px] ml-5 md:ml-22.5 mt-3 md:mt-20 mb-20 clash-bold text-[#333]">
        TOP CREATORS OF <br /> THE WEEK
      </h2>

      {/* Quote */}
      <p className="text-[13px] md:text-[32px] ml-5 md:ml-22.5 -mt-15 md:mt-30 mr-10 md:mr-57.5 clash text-[#333]">
        "Everything always looked better in black and white. Everything always
        as if it were the first time; there's always more people in a black and
        white photograph. It just makes it seem that there were more people at a
        gig, more people at a football match, than with colour photography.
        Everything looks more exciting." – Jack Lowden
      </p>

      {/* Creator Image */}
      <img
        src={creatorImages[currentIndex]}
        alt={`Top Creator ${currentIndex + 1}`}
        className={`block absolute right-15 md:right-60 -bottom-15 md:-bottom-70 w-59.25 h-60 md:w-206.5 md:h-auto object-contain z-20 ${
          animate ? "creator-fade-in" : ""
        }`}
      />

      {/* CIRCA Text */}
      <span className="block absolute right-5 md:right-41 bottom-15 md:bottom-58 text-[32px] md:text-[70px] text-[#161616] clash-extrabold z-10 select-none opacity-60">
        CIRCA
      </span>

      {/* 1985 Text with Line-through */}
      <span 
        className="block absolute right-5 md:right-41 -bottom-4 md:bottom-8 text-[64px] md:text-[170px] text-[#161616] clash-extrabold z-10 select-none line-through overlay-text"
        style={{ 
          textDecorationColor: '#161616',
          textDecorationThickness: '8px'
        }}
      >
        1985
      </span>
    </section>
  );
};

export default CreatorsSection;