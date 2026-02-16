import React from "react";
import type { BidButtonProps } from "../data/types/auction.model";

const BidButton: React.FC<BidButtonProps> = ({ currentBid, onClick }) => (
  <button
    className="bid-btn w-99.5 h-21.25 md:w-136.25 md:h-36.75  text-white rounded-2xl flex items-center justify-between px-6"
    onClick={onClick}
    type="button"
  >
    <div className="flex flex-col items-start space-y-4 md:space-y-7">
      <span className="text-[18px] md:text-[30px] text-[#616161] satoshi-bold">Current Bid</span>
      <span className="text-[18px] md:text-[30px] satoshi-bold app-text">{currentBid}</span>
    </div>
    <span className="place-bid-btn w-39.25 h-11.5 md:w-62 md:h-18.5 bg-black flex items-center justify-center text-[17px] md:text-[26px] satoshi-bold cursor-pointer ">
      Place Bid
    </span>
  </button>
);

export default BidButton;