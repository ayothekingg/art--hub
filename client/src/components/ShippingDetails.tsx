import React from "react";
import ProductSummary from "./ProductSummary";
import CartSummary from "./CartSummary";
import ShippingForm from "./ShippingForm";
import { useCartStore } from "../store/cartStore";
import { FiShoppingCart } from "react-icons/fi";
import type { ShippingDetailsProps } from "../data/types/marketplace.model";

const ShippingDetails: React.FC<ShippingDetailsProps> = ({ onProceed }) => {
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  return (
    <div className="md:px-30 px-2.5 app-bg app-text">
      <div className="w-131.25 h-0.5 bg-[#aaaaaa] rounded-full my-14 ml-auto hidden md:flex" />

      <div className="flex flex-col md:flex-row gap-8 md:-mt-10 mt-5">
        <ShippingForm onProceed={onProceed} />

        <div className="flex-col items-start py-10 w-full hidden md:flex ml-25">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center pl-27 justify-center w-full py-20">
              <div className="flex items-center justify-center w-24 h-24 rounded-full search-input mb-4">
                <FiShoppingCart size={48} className="text-[#888888]" />
              </div>
              <div className="text-center ] text-2xl mb-6">
                Your cart is empty.
              </div>
              
            </div>
          ) : (
            <>
              {cart.map((product, idx) => (
                <React.Fragment key={product.id}>
                  <ProductSummary
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
                    <div className="w-full h-0.5 bg-[#aaaaaa] rounded-full my-14" />
                  )}
                </React.Fragment>
              ))}
              <div className="w-full h-0.5 bg-[#aaaaaa] rounded-full my-14" />
              <div className="flex flex-col gap-6 mt-0 w-full text-[28px] satoshi-medium ">
                <CartSummary />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShippingDetails;