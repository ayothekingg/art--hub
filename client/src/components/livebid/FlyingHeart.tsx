import React from "react";
import { IoHeart } from "react-icons/io5";
import type { FlyingHeartProps } from "@/data/types/livebid.model";

const FlyingHeart: React.FC<FlyingHeartProps> = ({ offset, color, size, rotate }) => (
  <span
    className="animate-fly-heart"
    style={{
      left: offset,
      position: "relative",
    }}
  >
    <span
      style={{
        display: "inline-block",
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <IoHeart
        style={{
          color,
          fontSize: `${size}px`,
        }}
        className="opacity-80"
      />
    </span>
  </span>
);

export default FlyingHeart;