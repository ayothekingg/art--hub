import React from "react";
import { LiaArrowRightSolid } from "react-icons/lia";

const OthersSection: React.FC = () => {
  return (
    <section className="w-full h-84 md:h-screen flex flex-col justify-between app-bg relative">
      <div className="flex-1 flex items-center justify-start"></div>
      <hr className="border-[0.5px] border-main m-0" />
      <div className="flex-1 flex items-center justify-between text-[24px] md:text-[48px] ml-5 md:ml-19.5 mr-10 md:mr-50 satoshi-bold app-text">
        <span>Explore Marketplace</span>
        <button
          className="w-13.5 h-13.5 md:w-19.5 md:h-19.5 flex items-center justify-center rounded-full app-bg border-main border-[0.41px] ml-3"
          aria-label="explore Marketplace"
          type="button"
        >
          <LiaArrowRightSolid
            style={{ width: "32.82px", height: "auto" }}
            className="featured-arrow"
          />
        </button>
      </div>
      <hr className="border-[0.5px] border-main m-0" />
      <div className="flex-1 flex items-center justify-between text-[24px] md:text-[48px] ml-5 md:ml-19.5 mr-10 md:mr-50 satoshi-bold app-text">
        <span>See Auctions</span>
        <button
          className="w-13.5 h-13.5 md:w-19.5 md:h-19.5 flex items-center justify-center rounded-full app-bg border-main border-[0.41px] ml-35"
          aria-label="see Auctions"
          type="button"
        >
          <LiaArrowRightSolid
            style={{ width: "32.82px", height: "auto" }}
            className="featured-arrow"
          />
        </button>
      </div>
      <hr className="border-[0.5px] border-main m-0" />
      <div className="flex-1 flex items-center justify-start"></div>
    </section>
  );
};

export default OthersSection;
