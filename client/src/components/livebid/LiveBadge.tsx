import React from "react";
import type { LiveBadgeProps } from "@/data/types/livebid.model";

const LiveBadge: React.FC<LiveBadgeProps> = ({ size = "large", className = "" }) => {
  const sizeClasses = size === "small" 
    ? "w-12.25 h-6.75 text-[13px] bg-[#006CA2]" 
    : "w-26 h-9.75 text-[20px] bg-[#4693ED]";

  return (
    <div className={`rounded-[${size === "small" ? "10px" : "40px"}] flex items-center justify-center ${sizeClasses} ${className}`}>
      <span className={`text-white satoshi-bold tracking-widest ${size === "small" ? "p-x-y-2" : ""}`}>
        LIVE
      </span>
    </div>
  );
};

export default LiveBadge;