import React from "react";
import type { MainAuctionCardProps } from "@/data/types/auction.model";

const MainAuctionCard: React.FC<MainAuctionCardProps> = ({ image }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden w-57 h-46.5 md:w-121 md:h-99">
      <img src={image} alt="Auction" className="w-full h-full object-cover" />
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-8 w-50.5 h-11 md:w-99.5 md:h-21.25 bg-white/20 backdrop-blur-[2px] border border-white rounded-xl flex items-center px-6 z-10">
        <span className="text-white satoshi-bold text-base md:text-2xl lg:text-4xl">
          6hr : 40mins: 15s
        </span>
      </div>
    </div>
  );
};

export default MainAuctionCard;