import React from "react";
import { AiFillHeart } from "react-icons/ai";

interface CreatorCardProps {
  image: string;
  name?: string;
  highestBid?: number | string;
}

const CreatorCard: React.FC<CreatorCardProps> = ({ image, name, highestBid }) => {
  return (
    <div
      className="app-bg rounded-2xl shadow-none w-[398px] h-64 md:w-[545px] md:h-[498px] flex flex-col justify-center p-0 relative"
      style={{
        boxShadow: "0px 0px 9px -1px #00000040",
      }}
    >
      <div className="absolute top-1 md:top-6 right-1 -translate-x-1/2 z-10 w-7 h-7 md:w-[68px] md:h-[68px] bg-transparent flex items-center border sort-border justify-center rounded-full">
        <AiFillHeart className="text-red-500" size={32} />
      </div>
      <div className="w-[358px] h-[184px] md:w-[545px] md:h-[280px] md:mt-20 mt-8 ml-5 md:ml-0 flex items-center justify-center overflow-hidden rounded-lg">
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