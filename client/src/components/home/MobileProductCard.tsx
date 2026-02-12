import React from "react";
import CreatorAvatars from "./CreatorAvatars";
import { LiaArrowRightSolid } from "react-icons/lia";
import type { ProductCardProps } from "@/data/types/home.model";

const MobileProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewProduct,
}) => (
  <div className="mb-14">
    <div className="relative w-full h-64 mx-auto mb-6">
      <img
        src={product.img}
        alt={product.title}
        className="w-full h-full object-cover"
        style={{ filter: "brightness(0.5)" }}
      />
      <span className="absolute left-1/2 -translate-x-1/2 top-6 text-white text-[30px] font-bold clash-bold text-center w-full px-2 z-10">
        {product.title}
      </span>
      <button
        className="absolute right-10 bottom-20 w-12 h-12 flex items-center justify-center rounded-full bg-transparent border border-white z-10"
        aria-label="View product"
        type="button"
        onClick={onViewProduct}
      >
        <LiaArrowRightSolid className="w-8 h-8 text-white" />
      </button>
    </div>
    <p className="featured-desc text-[15px] satoshi-normal mb-5">
      {product.desc}
    </p>
    <CreatorAvatars count={64} />
      <hr className="w-45 border-[0.5px] border-main my-6" />
  </div>
);

export default MobileProductCard;