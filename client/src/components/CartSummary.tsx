import React from "react";
import { useCartStore } from "../store/cartStore";

const SHIPPING_COST = 5.0;

const CartSummary: React.FC = () => {
  const cart = useCartStore((state) => state.cart);

  const productsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );
  const grandTotal = total + SHIPPING_COST;

  return (
    <div className="flex flex-col gap-6 w-full min-w-55 md:mb-30 md:w-auto md:text-[28px] text-[20px] px-2 satoshi-medium">
      <div className="flex justify-between">
        <span className="text-[#888888]">Products in Cart:</span>
        <span>
          {productsCount} item{productsCount !== 1 ? "s" : ""}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-[#888888]">Shipping:</span>
        <span>${SHIPPING_COST.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-[#888888]">Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-[#888888]">Grand Total:</span>
        <span>${grandTotal.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartSummary;