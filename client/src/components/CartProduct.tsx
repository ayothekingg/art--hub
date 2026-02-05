import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

interface CartProductProps {
  image: string;
  title: string;
  subtitle: string;
  price: string | number;
  quantity: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onRemove?: () => void;
}

const CartProduct: React.FC<CartProductProps> = ({
  image,
  title,
  subtitle,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}) => (
  <div className="flex items-center gap-3 md:gap-6 my-6">
    <img
      src={image}
      alt={title}
      className="md:w-[210px] md:h-[196px] w-[125px] h-[125px] object-cover md:rounded-lg"
    />
    <div className="flex flex-col flex-1 md:gap-5 gap-4">
      <span className="md:text-[26px] text-[22px] satoshi-bold md:satoshi-medium">{title}</span>
      <span className="md:text-[24px] text-[16px] text-[#888888] satoshi">{subtitle}</span>
      {/* Fixed size */}
      <span className="text-[20px] text-[#888888] hidden md:flex satoshi">
        Size: <span className="app-text px-2">200 ft</span>
      </span>
      <div className="hidden md:flex items-center gap-6 mt-2">
        <span aria-label="Decrease quantity" className="cursor-pointer" onClick={onDecrease}>
          <FiMinus size={24} />
        </span>
        <span className="text-[24px] satoshi-bold app-text">{quantity}</span>
        <span aria-label="Increase quantity" className="cursor-pointer" onClick={onIncrease}>
          <FiPlus size={24} />
        </span>
      </div>
      <div className="flex md:hidden items-center mt-2">
      <div className="flex items-center justify-between w-[125px] h-[35px] -mt-2 rounded-lg border border-[#888888] bg-transparent">
  <span aria-label="Decrease quantity" className="cursor-pointer ml-3" onClick={onDecrease}>
    <FiMinus size={20} />
  </span>
  <div className="w-px h-[34px] -ml-2 bg-[#888888]" />
  <span className="text-[22px] satoshi-bold app-text">{quantity}</span>
  <div className="w-px h-[34px] bg-[#888888]" />
  <span aria-label="Increase quantity" className="cursor-pointer mr-2" onClick={onIncrease}>
    <FiPlus size={20} />
  </span>
</div>
      </div>
    </div>
    <div className="flex flex-col items-center gap-12 md:gap-15 ml-auto">
      <button
        className="flex items-center justify-center md:w-12 md:h-12 w-10 h-10 -ml-7 md:ml-0 rounded-full border border-[#CCCCCC]"
        aria-label="Delete item"
        onClick={onRemove}
      >
        <AiOutlineClose size={28} className="text-[#888888]" />
      </button>
      <span className="md:text-[36px] text-[22px] -ml-12 md:ml-0 satoshi-medium">${price}</span>
    </div>
  </div>
);

export default CartProduct;