import React, { useState } from "react";
import { LiaArrowRightSolid } from "react-icons/lia";
import type { ProductImageHoverProps } from "@/data/types/home.model";

const ProductImageHover: React.FC<ProductImageHoverProps> = ({ src, onViewClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full md:w-152.5 h-64 md:h-76.25 cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onViewClick}
    >
      <img
        src={src}
        alt="Featured Product"
        className="w-full h-full object-cover transition-all duration-300 ease-out"
        style={{
          filter: hovered ? "brightness(0.5)" : "brightness(1)",
        }}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-out ${
          hovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-4">
          <span className="text-white text-2xl md:text-[40px] font-bold clash-normal">
            View product
          </span>
          <button
            className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-transparent border-white border cursor-pointer"
            aria-label="View product"
            type="button"
          >
            <LiaArrowRightSolid className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductImageHover;