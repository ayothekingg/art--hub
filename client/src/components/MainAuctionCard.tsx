import React from "react";

interface MainAuctionCardProps {
  image: string;
}

const MainAuctionCard: React.FC<MainAuctionCardProps> = ({ image }) => {
  console.log("MainAuctionCard image prop:", image); 
  return (
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden w-[228px] h-[186px] md:w-[484px] md:h-[396px]">
      <img src={image} alt="Auction" className="w-full h-full object-cover" />
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-8 w-[202px] h-11 md:w-[398px] md:h-[85px] bg-white/20 backdrop-blur-[2px] border border-white rounded-xl flex items-center px-6 z-10">
        <span className="text-white satoshi-bold text-[20px] md:text-[40px]">6hr : 40mins: 15s</span>
      </div>
    </div>
  );
};

export default MainAuctionCard;