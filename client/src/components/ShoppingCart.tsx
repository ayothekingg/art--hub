import React from "react";
import CartProduct from "./CartProduct";
import CartSummary from "./CartSummary";
import { useCartStore } from "../store/cartStore";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import type { ShoppingCartProps } from "../data/types/marketplace.model";

const ShoppingCart: React.FC<ShoppingCartProps> = ({ onProceed }) => {
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  return (
    <div className="md:px-30 px-2.5">
      {cart.length > 0 && (
        <div className="w-full h-0.5 bg-[#aaaaaa] rounded-full my-6 mb-15 hidden md:flex" />
      )}

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 md:mb-10">
          <div className="flex items-center justify-center w-30 h-30 rounded-full search-input mb-4">
            <FiShoppingCart size={55} className="text-[#888888]" />
          </div>
          <div className="text-center text-[20px] md:text-[30px] satoshi-medium mb-6">
            Your cart is empty.
          </div>
          <Link to="/Marketplace">
            <button className="bg-[#272727] text-white md:text-[30px] text-[20px] satoshi-bold w-70 md:w-132.5 h-15 md:h-27.5">
              Check Our Arts
            </button>
          </Link>
        </div>
      ) : (
        cart.map((product, idx) => (
          <React.Fragment key={product.id}>
            <CartProduct
              image={product.image}
              title={product.title}
              subtitle={product.subtitle}
              price={product.price}
              quantity={product.quantity}
              onIncrease={() =>
                updateQuantity(product.id, product.quantity + 1)
              }
              onDecrease={() =>
                product.quantity > 1
                  ? updateQuantity(product.id, product.quantity - 1)
                  : removeFromCart(product.id)
              }
              onRemove={() => removeFromCart(product.id)}
            />

            {idx < cart.length - 1 && (
              <div className="md:flex hidden w-full h-0.5 bg-[#aaaaaa] rounded-full my-15" />
            )}
          </React.Fragment>
        ))
      )}

      {cart.length > 0 && (
        <div className="w-full h-0.5 bg-[#aaaaaa] rounded-full my-6 mt-15 mb-15 hidden md:flex" />
      )}

      {cart.length > 0 && (
        <div className="flex flex-col md:flex-row justify-between items-start mt-8 mb-15 gap-10 w-full">
          <div className="flex flex-col items-center gap-6 w-full md:w-auto order-1">
            <button
              className="bg-[#272727] text-white md:text-[30px] text-[20px] satoshi-bold w-70 md:w-132.5 h-15 md:h-27.5"
              onClick={onProceed}
              disabled={cart.length === 0}
            >
              Proceed to Checkout
            </button>
            <span className="md:text-[28px] text-[18px] underline satoshi-medium text-center cursor-pointer">
              Continue Shopping
            </span>
          </div>
          <div className="w-full md:w-auto order-2">
            <div className="md:min-w-135">
              <CartSummary />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
