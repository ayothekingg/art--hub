import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

interface ProductSummaryProps {
  image: string;
  title: string;
  subtitle: string;
  price: string | number;
  quantity: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onRemove?: () => void;
}

const ProductSummary: React.FC<ProductSummaryProps> = ({
  image,
  title,
  subtitle,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}) => (
  <div className="w-full">
    <div className="flex items-center justify-between w-full gap-6">
      <div className="flex items-center gap-6 min-w-0 flex-1">
        <img
          src={image}
          alt={title}
          className="w-[166px] h-[196px] object-cover rounded-lg shrink-0"
        />
        <div className="flex flex-col gap-6 min-w-0 w-full">
          <span className="text-[24px] satoshi-medium leading-tight truncate">{title}</span>
          <span className="text-[24px] text-[#888888] satoshi leading-tight truncate">{subtitle}</span>
          <span className="text-[20px] text-[#888888] satoshi leading-tight">
            Size: <span className="app-text">200 ft</span>
          </span>
          <div className="flex items-center gap-6 mt-1">
            <span aria-label="Decrease quantity" className="cursor-pointer" onClick={onDecrease}>
              <FiMinus size={20} />
            </span>
            <span className="text-[24px] satoshi-bold app-text">{quantity}</span>
            <span aria-label="Increase quantity" className="cursor-pointer" onClick={onIncrease}>
              <FiPlus size={20} />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-27 shrink-0 w-[70px]">
        <button
          className="flex items-center justify-center w-10 h-10 rounded-full border border-[#CCCCCC]"
          aria-label="Delete item"
          onClick={onRemove}
        >
          <AiOutlineClose size={18} className="text-[#888888]" />
        </button>
        <span className="text-[36px] satoshi-medium">{price}</span>
      </div>
    </div>
  </div>
);

export default ProductSummary;