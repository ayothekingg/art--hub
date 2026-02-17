import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import MainAuctionCard from "@/components/auctions/MainAuctionCard";
import ArrowButton from "@/components/shared/ArrowButton";
import type { AuctionCarouselProps } from "@/data/types/auction.model";

const CARD_WIDTH = 228;
const CARD_GAP = 32;

const AuctionCarousel = ({ auctions }: AuctionCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -(CARD_WIDTH + CARD_GAP),
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: CARD_WIDTH + CARD_GAP,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const idx = Math.round(scrollLeft / (CARD_WIDTH + CARD_GAP));
      setActiveIdx(idx);
    }
  };

  return (
    <div className="relative">
      <ArrowButton
        direction="left"
        onClick={handlePrev}
        className="md:hidden absolute left-1 -mt-8 top-1/2 -translate-y-1/2 z-10"
      />
      <ArrowButton
        direction="right"
        onClick={handleNext}
        className="md:hidden absolute -mt-8 right-4 top-1/2 -translate-y-1/2 z-10"
      />

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex flex-row gap-5 md:gap-8 mt-10 md:mt-20 overflow-x-auto whitespace-nowrap no-scrollbar pb-4 pr-4 md:pr-16 scroll-smooth"
      >
        {auctions.map((img, idx) => (
          <div key={idx} className="shrink-0">
            <Link to="/livebid" state={img}>
              <MainAuctionCard image={img.image} />
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-1 md:gap-2 mt-4 md:mt-12">
        {auctions.map((_, idx) => (
          <span
            key={idx}
            className={`inline-block w-1.5 h-1.5 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${
              idx === activeIdx ? "bg-black dark:bg-gray-600" : "bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AuctionCarousel;