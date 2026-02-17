import React from "react";
import type { AuctionCardProps } from "@/data/types/home.model";

const AuctionCard: React.FC<AuctionCardProps> = ({ 
  card,
  onSeeMore,
  onSetReminder 
}) => {
  const handleSeeMore = (e: React.MouseEvent) => {
    e.preventDefault();
    onSeeMore?.();
  };

  return (
    <div className="relative w-86.75 h-67.25 md:w-305 md:h-141.5 mx-auto md:mt-5 mb-4 overflow-hidden">
      <img
        src={card.image}
        alt="Auction"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <span className="absolute bottom-27 left-2 md:left-8 text-white text-[40px] md:text-[67.6px] bellefair z-10">
        {card.number}
      </span>
      <div className="absolute bottom-45 left-6 md:left-15 flex items-center z-10">
        {card.bullet && (
          <span className="text-white text-[40px] mt-1 md:text-[80px] leading-none md:-mt-15 mr-3">
            •
          </span>
        )}
        <span className="text-white text-[20px] md:text-[30px] bellefair tracking-wide">
          {card.title[0]} <br /> {card.title[1]}
        </span>
      </div>
      <span className="absolute bottom-38 left-13 md:left-27 text-white text-[12px] md:text-[14px] satoshi-medium z-10 tracking-wide">
        {card.start}
      </span>
      <span className="absolute bottom-22 md:bottom-15 left-13 md:left-27 text-white text-[10px] md:text-[16px] satoshi-bold z-10 tracking-wide max-w-150">
        {card.description}
      </span>
      <div className="absolute bottom-5 md:bottom-12 right-5 md:right-10 flex items-center gap-6 z-10">
        <button
          onClick={handleSeeMore}
          className="text-white text-[14px] md:text-[24px] satoshi-medium underline underline-offset-4 cursor-pointer bg-transparent border-none"
        >
          See More
        </button>
        <button 
          onClick={onSetReminder}
          className="text-white text-[14px] h-9 md:text-[24px] satoshi-medium border border-white rounded-lg md:h-15.5 px-3 md:px-6 py-2 bg-transparent cursor-pointer"
        >
          Set A Reminder
        </button>
      </div>
    </div>
  );
};

export default AuctionCard;