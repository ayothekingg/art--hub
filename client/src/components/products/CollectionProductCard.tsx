import React from "react";
import { GrDiamond } from "react-icons/gr";
import { PiHeartStraightThin } from "react-icons/pi";
import type { CollectionProductCardProps } from "@/data/types/products.model";

const CollectionProductCard: React.FC<CollectionProductCardProps> = ({
  image,
  title,
  price,
}) => (
  <div className="w-99.5 h-127.25 md:w-132.25 md:h-144.75 border sort-border shrink-0 scrollbar-hidden flex flex-col items-center justify-between p-6">
   
    <div className="w-full flex justify-end md:mr-8 md:mt-0 -mt-5 md:mb-2">
      <PiHeartStraightThin className="text-[35px] md:text-[46px] tborder sort-border cursor-pointer" />
    </div>
    <img
      src={image}
      alt={title}
      className="w-92.25 h-105.25 md:w-111.5 md:h-105.25 object-cover"
    />
    <div className="flex justify-between items-center w-full  mb-10 h-30 md:px-4">
      <h1 className="text-[24px] md:text-[32px] satoshi-bold app-text">{title}</h1>
      <div className="flex items-center text-[24px] md:text-[32px] mb-2 app-text">
        <GrDiamond className="mr-2" />
        {price}
      </div>
    </div>
  </div>
);

export default CollectionProductCard;