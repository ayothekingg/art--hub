import React from "react";
import type { ProductCardProps } from "@/data/types/marketplace.model";

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => (
  <>
    
    <div className="hidden md:flex app-bg rounded-lg p-4 w-67.25 h-103.5 flex-col card-shadow">
      <img src={image} alt={title} className="w-60.25 h-70 object-cover rounded" />
      <div className="mt-3">
        <h3 className="text-[22px] satoshi uppercase">{title}</h3>
        <p className="text-[28px] satoshi-bold mt-5">${price.toFixed(2)}</p>
      </div>
    </div>
   
    <div className="flex flex-col ml-3 mt-2 mb-5 md:hidden">
      <img
        src={image}
        alt={title}
        className="w-89.25 h-96 object-cover"
      />
      <div className="flex justify-between items-center text-[16px] mt-3 px-1 w-full">
        <h3 className=" satoshi-bold uppercase">{title}</h3>
        <p className=" satoshi-bold mr-2">${price.toFixed(2)}</p>
      </div>
    </div>
  </>
);

export default ProductCard;