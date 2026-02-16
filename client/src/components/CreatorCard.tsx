import React from "react";
import { AiFillHeart } from "react-icons/ai";
import type { CreatorCardProps } from "../data/types/auction.model";

const CreatorCard: React.FC<CreatorCardProps> = ({ image, name, highestBid }) => {
  return (
    <div
      className="app-bg rounded-2xl shadow-none w-99.5 h-64 md:w-136.25 md:h-124.5 flex flex-col justify-center p-0 relative"
      style={{
        boxShadow: "0px 0px 9px -1px #00000040",
      }}
    >
      <div className="absolute top-1 md:top-6 right-1 -translate-x-1/2 z-10 w-7 h-7 md:w-17 md:h-17 bg-transparent flex items-center border sort-border justify-center rounded-full">
        <AiFillHeart className="text-red-500" size={32} />
      </div>
      <div className="w-89.5 h-46 md:w-136.25 md:h-70 md:mt-20 mt-8 ml-5 md:ml-0 flex items-center justify-center overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name || "Creator"}
          className="w-full h-full object-cover"
        />
      </div>
      
      {(name || highestBid) && (
        <div className="flex justify-between items-center w-full md:px-8 px-5 md:mt-6 md:block">
          {name && (
            <span className="text-[20px] md:text-[40px] satoshi-bold text-left">
              {name}
            </span>
          )}
          {highestBid && (
            <span className="text-[20px] satoshi-bold text-right md:hidden">
              {highestBid}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default CreatorCard;