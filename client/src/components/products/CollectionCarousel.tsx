import { useRef, memo } from "react";
import { Link } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import CollectionProductCard from "./CollectionProductCard";
import type { CollectionCarouselProps } from "@/data/types/products.model";

const CollectionCarousel = memo(({ products }: CollectionCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Header */}
      <div className="ml-30 w-305 h-28.5 mt-15 mb-15 bg-white dark:bg-[#181818] rounded-[15px] hidden md:flex items-center justify-between px-10 shadow card-shadow app-bg app-text">
        <span className="text-[32px] text-[#333333] satoshi-medium app-text">
          Explore more from this collection
        </span>
        <div className="flex gap-6">
          <button
            onClick={() => scroll("left")}
            className="w-11 h-11 md:w-14.5 md:h-14.5 flex items-center justify-center rounded-full app-bg border-main border-[0.41px]"
            aria-label="Scroll left"
          >
            <HiChevronLeft size={32} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-11 h-11 md:w-14.5 md:h-14.5 flex items-center justify-center rounded-full app-bg border-main border-[0.41px]"
            aria-label="Scroll right"
          >
            <HiChevronRight size={32} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="overflow-x-auto no-scrollbar ml-30 mr-30 mb-15 gap-8 hidden md:flex"
      >
        {products.map((item) => (
          <Link key={item.id} to={`/Marketplace/product/${item.id}`}>
            <CollectionProductCard
              image={item.image}
              title={item.title}
              price={item.price}
            />
          </Link>
        ))}
      </div>

      {/* Explore More Button */}
      <div className="justify-center mt-10 mb-30 hidden md:flex">
        <button className="px-8 py-3 w-62.25 h-18.25 app-bg app-text border sort-border rounded-lg text-[30px] satoshi-medium">
          Explore More
        </button>
      </div>
    </>
  );
});

CollectionCarousel.displayName = "CollectionCarousel";

export default CollectionCarousel;