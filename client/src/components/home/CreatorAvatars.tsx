import React from "react";
import { creators } from "@/data";

const CreatorAvatars: React.FC<{ count?: number }> = ({ count = 64 }) => (
  <div className="flex items-center">
    <div className="flex">
      {creators.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Creator ${idx + 1}`}
          className="rounded-full w-10 h-10 md:w-12.75 md:h-12.75 border border-[#78A3AD]"
          style={{
            objectFit: "cover",
            marginLeft: idx === 0 ? 0 : -12,
            zIndex: 10 + idx,
          }}
        />
      ))}
    </div>
    <span className="text-base md:text-[20px] app-text satoshi ml-3 md:ml-4">
      {count} major creators
    </span>
  </div>
);

export default CreatorAvatars;