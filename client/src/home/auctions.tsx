import { useState } from "react";
import ArrowButton from "../components/ArrowButton";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSwipeable } from "react-swipeable";
import { auctionCards } from "../data";
import AuctionCard from "../components/AuctionCard";

const Auctions = () => {
  const [current, setCurrent] = useState(0);
  const card = auctionCards[current];

  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? auctionCards.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrent((prev) => (prev === auctionCards.length - 1 ? 0 : prev + 1));

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  return (
    <section
      className="h-[336px] md:h-auto"
      style={{
        width: "100%",
        background:
          "linear-gradient(100deg, #4693ED -26.21%, #79C2D2 12.16%, rgba(192, 86, 9, 0.60) 111.62%)",
        padding: "2rem",
        boxSizing: "border-box",
      }}
    >
      <div className="hidden md:block">
        <h2 className="text-white satoshi-bold text-[22px] md:text-[40px] mb-4 ml-4 md:ml-[90px]">
          See Upcoming Auctions and Exhibitions
        </h2>
        <div className="flex items-center w-[667px] ml-[120px] text-white">
          <div className="flex-1 h-px bg-white rounded" />
          <MdKeyboardArrowRight className="-ml-3" size={20} />
        </div>
      </div>

      <div {...swipeHandlers}>
        <AuctionCard card={card} />
      </div>

      <div className="hidden md:flex items-center justify-between w-[1220px] ml-[90px] mt-6">
        <div
          style={{
            width: "295.6947px",
            height: "10px",
            borderRadius: "50px",
            background: "#AEAEAE",
            opacity: 1,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${((current + 1) / auctionCards.length) * 100}%`,
              height: "100%",
              background: "white",
              borderRadius: "50px",
              transition: "width 0.3s",
            }}
          />
        </div>
        <div className="flex gap-4">
          <ArrowButton direction="left" onClick={handlePrev} />
          <ArrowButton direction="right" onClick={handleNext} />
        </div>
      </div>
    </section>
  );
};

export default Auctions;
