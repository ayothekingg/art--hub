import React, { useState } from "react";
import { IoHeart } from "react-icons/io5";
import FlyingHeart from "./FlyingHeart";
import type { FlyingHeartButtonProps } from "../data/types/auction.model";

const HEART_COLORS = [
  "#E31616", // red
  "#4693ED", // blue
  "#F9A826", // yellow/orange
  "#A259FF", // purple
  "#43E6A0", // green
  "#FF61A6", // pink
];


const FlyingHeartButton: React.FC<FlyingHeartButtonProps> = ({
  className = "",
  heartCount = 1,
}) => {
  const [flyingHearts, setFlyingHearts] = useState<
    { id: number; offset: number; color: string; size: number; rotate: number }[]
  >([]);

  const handleHeartClick = () => {
    for (let i = 0; i < heartCount; i++) {
      setTimeout(() => {
        const newId = Date.now() + Math.random();
        const color = HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)];
        const size = Math.floor(Math.random() * 16) + 24;
        const offset = Math.floor(Math.random() * 40) - 20;
        const rotate = Math.floor(Math.random() * 81) - 40;
        setFlyingHearts((prev) => [
          ...prev,
          { id: newId, offset, color, size, rotate },
        ]);
        setTimeout(() => {
          setFlyingHearts((prev) => prev.filter((h) => h.id !== newId));
        }, 1200);
      }, i * 100);
    }
  };

  return (
    <div className={`w-13.75 h-13.75 md:w-16.25 md:h-16.25 rounded-full bg-white/20 md:bg-transparent flex items-center justify-center border sort-border shadow relative z-10 ${className}`}>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
        {flyingHearts.map((heart) => (
          <FlyingHeart
            key={heart.id}
            offset={heart.offset}
            color={heart.color}
            size={heart.size}
            rotate={heart.rotate}
          />
        ))}
      </div>
      <button
        type="button"
        aria-label="Like"
        onClick={handleHeartClick}
        className="flex items-center justify-center w-full h-full focus:outline-none"
      >
        <IoHeart className="text-[30px] md:text-[40px] text-[#E31616]" />
      </button>
    </div>
  );
};

export default FlyingHeartButton;