import { PiHeartStraightThin } from "react-icons/pi";
import type { AddToCartButtonProps } from "@/data/types/products.model";

const AddToCartButton = ({ onAddToCart, size = "mobile" }: AddToCartButtonProps) => {
  const buttonStyles = {
    mobile: {
      button: "w-53.5 h-13.5",
      text: "text-[20px]",
      icon: 32,
      iconContainer: "w-13.5 h-13.5",
    },
    desktop: {
      button: "w-78.75 h-20",
      text: "text-[26px]",
      icon: 60,
      iconContainer: "w-25 h-20",
    },
  };

  const styles = buttonStyles[size];

  return (
    <div className="flex flex-row items-center gap-4 md:gap-6">
      <button
        className={`${styles.button} bg-[#272727] text-white ${styles.text} satoshi-bold`}
        onClick={onAddToCart}
      >
        Add to Cart
      </button>
      <div className={`${styles.iconContainer} flex items-center justify-center border sort-border cursor-pointer`}>
        <PiHeartStraightThin className="tborder sort-border" size={styles.icon} />
      </div>
    </div>
  );
};

export default AddToCartButton;