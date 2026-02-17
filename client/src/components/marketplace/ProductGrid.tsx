import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../marketplace/ProductCard";
import LoadMoreButton from "../shared/LoadMoreButton";
import SeeMoreButton from "../shared/SeeMoreButton"; 
import useViewport from "@/hooks/useViewport"; 
import type { ProductGridProps } from "@/data/types/marketplace.model";

const MOBILE_MAX = 5;

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  hasMore,
  onLoadMore,
  onViewportChange,
}) => {
  const { isMobile } = useViewport();

  // Reset products when viewport changes
  useEffect(() => {
    if (onViewportChange) {
      onViewportChange();
    }
  }, [isMobile]);

  // Only show 5 products on mobile
  const displayedProducts = isMobile ? products.slice(0, MOBILE_MAX) : products;

  if (displayedProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 md:h-96 mt-8 md:mt-0">
        <p className="text-xl md:text-2xl text-[#999] satoshi-medium">
          No products found
        </p>
        <p className="text-base md:text-lg text-[#999] satoshi mt-2">
          Try adjusting your filters
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mt-6 md:mt-0">
        {displayedProducts.map((product) => (
          <Link key={product.id} to={`/marketplace/product/${product.id}`}>
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
            />
          </Link>
        ))}
      </div>

      {/* Desktop See More Button */}
      {!isMobile && hasMore && (
        <div className="flex justify-center mt-40 mr-85">
          <SeeMoreButton onClick={onLoadMore} />
        </div>
      )}

      {/* Mobile Load More Button */}
      {isMobile && hasMore && (
        <div className="flex justify-center mt-10 mb-10">
          <LoadMoreButton onClick={onLoadMore} />
        </div>
      )}
    </>
  );
};

export default ProductGrid;