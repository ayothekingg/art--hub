import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import type { ArrowButtonProps } from "../data/types/auction.model";

const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction,
  onClick,
  className = "",
  ariaLabel,
}) => {
  return (
    <button
      className={`w-11 h-11 md:w-17.5 md:h-17.5 flex items-center justify-center rounded-full bg-white/20 text-white text-2xl md:text-[32px] cursor-pointer ${className}`}
      aria-label={ariaLabel || (direction === "left" ? "Previous" : "Next")}
      style={{
        backdropFilter: "blur(15.54px)",
        WebkitBackdropFilter: "blur(15.54px)",
        boxShadow: "7.77px 7.77px 11.66px 0px #00000026",
      }}
      onClick={onClick}
    >
      {direction === "left" ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
    </button>
  );
};

export default ArrowButton;