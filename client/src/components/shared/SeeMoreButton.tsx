import React from "react";
import type { SeeMoreButtonProps } from "@/data/types/shared.model";

const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-8 py-3 w-62.25 h-18.25 app-bg app-text border sort-border rounded-lg text-[30px] satoshi-medium hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${className}`}
    >
      See More
    </button>
  );
};

export default SeeMoreButton;