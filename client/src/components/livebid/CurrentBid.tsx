import React from "react";
import type { CurrentBidProps } from "@/data/types/livebid.model";

const CurrentBid: React.FC<CurrentBidProps> = ({ 
  amount, 
  size = "large",
  className = "" 
}) => {
  const textSize = size === "small" ? "text-[30px]" : "text-[48px]";

  return (
    <span className={`text-white ${textSize} satoshi-bold ${className}`}>
      Current bid ${amount.toLocaleString()}
    </span>
  );
};

export default CurrentBid;