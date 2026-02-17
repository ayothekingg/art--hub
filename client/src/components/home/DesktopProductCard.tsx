import React from "react";
import ProductImageHover from "./ProductImageHover";
import CreatorAvatars from "./CreatorAvatars";
import { LiaArrowRightSolid } from "react-icons/lia";
import type { ProductCardProps } from "@/data/types/home.model";

const DesktopProductCard: React.FC<ProductCardProps & { isLast?: boolean }> = ({
  product,
  index,
  onViewProduct,
  onSeeCreators,
  isLast,
}) => {
  const isReversed = index % 2 === 1;

  return (
    <>
      <hr className="w-[calc(100%-240px)] mx-30 my-15 border-t border-main" />
      <div className={`flex items-center gap-12 ${
        isReversed ? "flex-row-reverse mr-30" : "ml-30"
      } ${isLast ? "mb-24" : "mb-15"}`}>
        <ProductImageHover src={product.img} onViewClick={onViewProduct} />
        <div className={`flex-1 ${isReversed ? "ml-30" : "mr-30"}`}>
          <h3 className="text-[36px] app-text mb-6 clash-medium">
            {product.title}
          </h3>
          <p className="featured-desc text-[24px] satoshi-normal mb-9">
            {product.desc}
          </p>
          <div className="flex items-center">
            <CreatorAvatars />
            <button
              className="w-16 h-16 flex items-center justify-center rounded-full app-bg border-main border ml-auto cursor-pointer"
              aria-label="See creators"
              type="button"
              onClick={onSeeCreators}
            >
              <LiaArrowRightSolid className="w-8 h-8 featured-arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopProductCard;