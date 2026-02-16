import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import type { BidInputBoxProps } from "../data/types/auction.model";

const BidInputBox: React.FC<BidInputBoxProps> = ({
  placeholder = "Place Bid",
  onSend,
}) => {
  const [value, setValue] = React.useState("");

  const handleSend = () => {
    if (onSend) onSend(value);
    setValue("");
  };

  return (
    <div className="border  rounded-[30px] w-75.5 h-10 md:w-101 md:h-16.25 flex items-center px-4 bg-transparent">
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-[15px] md:text-[20px] satoshi-medium app-text placeholder:text-white  md:placeholder:text-gray-400"
      />
      <button type="button" className="ml-4" onClick={handleSend}>
        <RiSendPlaneFill className="text-[25px] md:text-[32px] cursor-pointer" />
      </button>
    </div>
  );
};

export default BidInputBox;