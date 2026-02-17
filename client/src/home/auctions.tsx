import { useState } from "react";
import ArrowButton from "@/components/shared/ArrowButton";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSwipeable } from "react-swipeable";
import { auctionCards } from "@/data";
import AuctionCard from "@/components/home/AuctionCard";

const Auctions = () => {
  const [current, setCurrent] = useState(0);
  const card = auctionCards[current];

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };
  const handleNext = () => {
    if (current < auctionCards.length - 1) setCurrent(current + 1);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  const progressPercentage = ((current + 1) / auctionCards.length) * 100;

  return (
    <section
      className="h-84 md:h-auto p-8"
      style={{
        background: "linear-gradient(100deg, #4693ED -26.21%, #79C2D2 12.16%, rgba(192, 86, 9, 0.60) 111.62%)",
      }}
    >
      <div className="hidden md:block">
        <h2 className="text-white satoshi-bold text-[22px] md:text-[40px] mb-4 ml-4 md:ml-22.5">
          See Upcoming Auctions and Exhibitions
        </h2>
        <div className="flex items-center w-166.75 ml-30 text-white">
          <div className="flex-1 h-px bg-white rounded" />
          <MdKeyboardArrowRight className="-ml-3" size={20} />
        </div>
      </div>

      <div {...swipeHandlers}>
        <AuctionCard card={card} />
      </div>

      <div className="hidden md:flex items-center justify-between w-305 ml-22.5 mt-6">
        <div className="w-full max-w-sm h-2.5 rounded-full bg-[#AEAEAE] overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <div className="flex gap-4 ml-8">
          <ArrowButton direction="left" onClick={handlePrev} disabled={current === 0} />
          <ArrowButton direction="right" onClick={handleNext} disabled={current === auctionCards.length - 1} />
        </div>
      </div>
    </section>
  );
};

export default Auctions;