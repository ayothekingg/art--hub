import React from "react";
import { IoHeart } from "react-icons/io5";

interface FlyingHeartProps {
  offset: number;
  color: string;
  size: number;
  rotate: number;
}

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