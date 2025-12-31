import React from "react";

interface BidButtonProps {
  currentBid: string;
  onClick?: () => void;
}

const BidButton: React.FC<BidButtonProps> = ({ currentBid, onClick }) => (
  <button
    className="bid-btn w-[398px] h-[85px] md:w-[545px] md:h-[147px]  text-white rounded-2xl flex items-center justify-between px-6"
    onClick={onClick}
    type="button"
  >
    <div className="flex flex-col items-start space-y-4 md:space-y-7">
      <span className="text-[18px] md:text-[30px] text-[#616161] satoshi-bold">Current Bid</span>
      <span className="text-[18px] md:text-[30px] satoshi-bold app-text">{currentBid}</span>
    </div>
    <span className="place-bid-btn w-[157px] h-[46px] md:w-[248px] md:h-[74px] bg-black flex items-center justify-center text-[17px] md:text-[26px] satoshi-bold cursor-pointer ">
      Place Bid
    </span>
  </button>
);

export default BidButton;