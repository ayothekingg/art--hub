import { FiMinus, FiPlus } from "react-icons/fi";
import type { QuantitySelectorProps } from "@/data/types/products.model";

const QuantitySelector = ({
  quantity,
  onIncrement,
  onDecrement,
  size = "mobile",
}: QuantitySelectorProps) => {
  const iconSize = size === "mobile" ? 24 : 30;
  const textSize = size === "mobile" ? "text-[24px]" : "text-[36px]";

  return (
    <div className="flex items-center gap-6">
      <span
        onClick={onDecrement}
        aria-label="Decrease quantity"
        className="cursor-pointer"
      >
        <FiMinus size={iconSize} />
      </span>
      <span className={`${textSize} satoshi-bold app-text`}>{quantity}</span>
      <span
        onClick={onIncrement}
        aria-label="Increase quantity"
        className="cursor-pointer"
      >
        <FiPlus size={iconSize} />
      </span>
    </div>
  );
};

export default QuantitySelector;