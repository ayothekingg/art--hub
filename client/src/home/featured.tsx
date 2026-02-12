import React from "react";
import DesktopProductCard from "@/components/home/DesktopProductCard";
import MobileProductCard from "@/components/home/MobileProductCard";
import { products } from "@/data";

const Featured: React.FC = () => {
  const handleViewProduct = (_productId: number) => {
    // navigation logic
  };

  const handleSeeCreators = () => {
    // navigation logic
  };

  return (
    <section className="w-full py-16 app-bg flex flex-col items-start">
      <h2 className="text-[28px] md:text-[48px] ml-2.5 md:ml-30 mb-13 md:mb-0 satoshi-bold app-text">
        Featured Products
      </h2>
      <div className="hidden md:block w-full">
        {products.map((product, idx) => (
          <DesktopProductCard
            key={idx}
            product={product}
            index={idx}
            onViewProduct={() => handleViewProduct(idx)}
            onSeeCreators={handleSeeCreators}
          />
        ))}
      </div>
      <div className="block md:hidden w-full px-5">
        {products.map((product, idx) => (
          <MobileProductCard
            key={idx}
            product={product}
            index={idx}
            onViewProduct={() => handleViewProduct(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default Featured;