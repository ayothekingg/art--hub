import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import {
  desktopImages,
  mobileImages,
  mobileImageStyle,
  mobileEllipses,
} from "@/data";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  cssEase: "ease-out",
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const CYCLE_DURATION = 1800; // Total time per image (800ms delay + 1000ms animation)

const Hero: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveIdx((prev) => (prev + 1) % mobileImages.length);
    }, CYCLE_DURATION);
    return () => clearTimeout(timeout);
  }, [activeIdx]);

  return (
    <section className="w-full flex flex-col items-center justify-center py-20 app-bg">
      <h1
        className="font-bold mb-8 text-center px-5 md:px-35 font-clash app-text"
        style={{
          fontFamily: '"Clash Display", Arial, sans-serif',
          fontWeight: 500,
          lineHeight: "1.4",
        }}
      >
        <span className="text-[30px] md:hidden block">
          Photography is poetry and beautiful untold stories
        </span>
        <span className="hidden md:inline text-[64px]">
          Photography is poetry & beautiful untold stories
        </span>
      </h1>

      <p className="text-[16px] md:text-[28px] mb-20 satoshi-bold text-center px-8 md:px-64 app-text">
        Flip through more than 10,000 vintage shots, old photographs, historic
        images and captures seamlessly in one place. Register to get top access.
      </p>

      {/* Desktop Slider */}
      <div className="w-full mx-auto mb-10 hidden md:block">
        <Slider {...sliderSettings}>
          {desktopImages.map((img, idx) => (
            <div key={idx} className="flex justify-center px-2">
              <img 
                src={img.src} 
                alt={`Hero ${idx + 1}`} 
                style={img.style}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Mobile Image Carousel */}
      <div className="w-full mx-auto mb-20 relative flex justify-center items-center h-74 md:hidden">
        {/* Background Ellipses */}
        {mobileEllipses.map((ellipse, idx) => (
          <div key={idx} className={ellipse.className} style={ellipse.style} />
        ))}
        
        {/* Stacked Images */}
        {mobileImages.map((img, idx) => {
          const isActive = idx === activeIdx;
          return (
            <img
              key={idx}
              src={img.src}
              alt={`Hero Mobile ${idx + 1}`}
              className={`
                absolute transition-all duration-1000 ease-out
                ${img.rotate}
                ${isActive 
                  ? "z-20 opacity-100 scale-100" 
                  : "z-10 opacity-50 scale-95"
                }
              `}
              style={mobileImageStyle}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Hero;