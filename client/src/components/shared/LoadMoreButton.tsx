import React from "react";
import { LiaArrowRightSolid } from "react-icons/lia";
import type { LoadMoreButtonProps } from "@/data/types/shared.model";

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  onClick,
  label = "Load More",
  className = "",
}) => (
  <div className={`flex flex-row gap-4 items-center justify-end mr-5 w-full ${className}`}>
    <h3 className="text-[20px] satoshi">{label}</h3>
    <button
      className="w-13.5 h-13.5 flex items-center justify-center rounded-full app-bg border-main border-[0.41px]"
      aria-label={label}
      type="button"
      onClick={onClick}
    >
      <LiaArrowRightSolid
        style={{ width: "32.82px", height: "auto" }}
        className="featured-arrow"
      />
    </button>
  </div>
);

export default LoadMoreButton;