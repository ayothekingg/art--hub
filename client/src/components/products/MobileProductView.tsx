import { useState } from "react";
import { Link } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { marketplaceProducts } from "../../data";
import CollectionProductCard from "./CollectionProductCard";
import ProductInfo from "./ProductInfo";
import QuantitySelector from "./QuantitySelector";
import AddToCartButton from "./AddToCartButton";
import ProductDetails from "./ProductDetails";
import type { MobileProductViewProps } from "@/data/types/products.model";

const MobileProductView = ({
  product,
  quantity,
  onIncrement,
  onDecrement,
  onAddToCart,
}: MobileProductViewProps) => {
  const [mobileCardIndex, setMobileCardIndex] = useState(0);

  const handlePrevCard = () => {
    setMobileCardIndex((prev) =>
      prev === 0 ? marketplaceProducts.length - 1 : prev - 1
    );
  };

  const handleNextCard = () => {
    setMobileCardIndex((prev) =>
      prev === marketplaceProducts.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="md:hidden">
      <div className="block w-99.5 h-px bg-[#666666] ml-2 mb-6" />
      
      <div className="flex justify-center mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-89.25 h-96 object-cover"
        />
      </div>

      <div className="flex justify-between items-center w-89.25 mx-auto mb-6">
        <h1 className="text-[16px] uppercase satoshi-bold app-text">
          {product.title}
        </h1>
        <div className="flex items-center text-[16px] app-text">
          ${product.price}
        </div>
      </div>

      <div className="w-89.25 mx-auto mb-6">
        <ProductInfo
          creator={product.creator}
          location={product.location}
          views={product.views}
          size="mobile"
        />
        
        <div className="mt-2">
          <QuantitySelector
            quantity={quantity}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            size="mobile"
          />
        </div>
      </div>

      <div className="ml-8 mb-10">
        <AddToCartButton onAddToCart={onAddToCart} size="mobile" />
      </div>

      <ProductDetails
        description={product.description}
        listing={product.listing}
        status={product.status}
      />

      <div className="block w-99.5 h-px bg-[#666666] ml-2 mb-6" />

      <span className="text-[22px] satoshi-bold ml-5 mb-10 app-text">
        More from this collection
      </span>

      <div className="relative flex justify-center items-center mt-10 mb-25">
        <button
          onClick={handlePrevCard}
          className="absolute left-10 -mt-5 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-transparent border-[white] border z-10"
          aria-label="Previous card"
        >
          <HiChevronLeft size={32} className="text-[white]" />
        </button>
        
        <Link to={`/Marketplace/product/${marketplaceProducts[mobileCardIndex].id}`}>
          <div className="min-w-99.5 max-w-99.5">
            <CollectionProductCard
              image={marketplaceProducts[mobileCardIndex].image}
              title={marketplaceProducts[mobileCardIndex].title}
              price={marketplaceProducts[mobileCardIndex].price}
            />
          </div>
        </Link>

        <button
          onClick={handleNextCard}
          className="absolute right-10 -mt-5 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-transparent border-[white] border z-10"
          aria-label="Next card"
        >
          <HiChevronRight size={32} className="text-[white]" />
        </button>
      </div>
    </div>
  );
};

export default MobileProductView;