import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import MainAuctionCard from "../components/MainAuctionCard";
import { auctionImages } from "../data";
import ArrowButton from "../components/ArrowButton";
import CreatorCard from "../components/CreatorCard";
import BidButton from "../components/BidButton";
import { LiaArrowRightSolid } from "react-icons/lia";
import { creatorImg } from "../data";

const CARD_WIDTH = 228; 
const CARD_GAP = 32; 

const MainAuctions: React.FC = () => {
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
    <div className="block text-[18px] ml-2.5 mt-8 mb-5 satoshi-medium md:mt-15 md:text-[24px] md:mb-15 md:ml-30">
      <div className="hidden md:block">
        <Link to="/" className="text-[#999] hover:underline">
          Home
        </Link>
        <span className="text-[#999]">/</span>
        <span className="app-text">Auctions</span>
      </div>

      <div className="text-[20px] md:text-[28px] satoshi-medium mb-6 mt-4 md:mt-10 app-text">
        Here’s an overview of products actively on auction, explore!
      </div>

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
          {auctionImages.map((img, idx) => {
            return (
              <div key={idx} className="shrink-0">
                <Link to="/livebid" state={img}>
                  <MainAuctionCard image={img.image}  />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-1 md:gap-2 mt-4 md:mt-12 ">
          {auctionImages.map((_, idx) => (
            <span
              key={idx}
              className={`inline-block w-1.5 h-1.5 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${
                idx === activeIdx ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="text-[20px] md:text-[36px] satoshi-bold mb-6 mt-10 md:mt-20 app-text">
        Top bids from popular creators
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-6 mr-30 md:gap-0 mb-10 md:mt-20">
        {creatorImg.map((creator, idx) => (
          <div
            key={creator.id}
            className={`w-full md:w-136.25 ${
              idx === 0 ? "md:self-start" : "md:self-end"
            }`}
          >
            <CreatorCard
              image={creator.image}
              name={creator.name}
              highestBid={creator.highestBid}
            />
            <div className="mt-4 md:mt-15 px-2 md:px-0 space-y-6">
              <div className="text-[20px] md:text-[28px] text-[#616161] satoshi-medium">
                Creator : <span className="app-text">{creator.creator}</span>
              </div>

              <div className="text-[20px] md:text-[28px] text-[#616161] satoshi-medium">
                Date : <span className="app-text">{creator.date}</span>
              </div>
              <div className="text-[20px] md:text-[28px] text-[#616161] satoshi-medium hidden md:block">
                Highest Bid :{" "}
                <span className="app-text">{creator.highestBid}</span>
              </div>

              <div className="mt-10 -ml-2 md:ml-0 mb-10 md:mb-30">
                <BidButton currentBid={creator.currentBid} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row gap-4 items-center -mt-5 mb-8 md:hidden justify-center w-full">
        <h3 className="text-[20px] satoshi">Load More</h3>
        <button
          className="w-13.5 h-13.5 flex items-center justify-center rounded-full app-bg border-main border-[0.41px]"
          aria-label="Load More"
          type="button"
        >
          <LiaArrowRightSolid
            style={{ width: "32.82px", height: "auto" }}
            className="featured-arrow"
          />
        </button>
      </div>
    </div>
  );
};

export default MainAuctions;
