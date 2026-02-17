import React from "react";
import { auctionImages, creatorImg } from "../data";
import CreatorBidSection from "@/components/auctions/CreatorBidSection";
import AuctionCarousel from "@/components/auctions/AuctionCarousel";
import Breadcrumb from "@/components/shared/Breadcrumb";

const MainAuctions: React.FC = () => {
  return (
    <div className="block text-base md:text-lg ml-2.5 mt-8 mb-5 satoshi-medium md:mt-15 md:mb-15 md:ml-30">
      {/* Breadcrumb */}
      <div className="hidden md:block -ml-30">
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Auctions" },
          ]}
        />
      </div>

      <div className="text-lg md:text-xl lg:text-2xl satoshi-medium mb-6 mt-4 md:mt-10 app-text">
        Here's an overview of products actively on auction, explore!
      </div>

      <AuctionCarousel auctions={auctionImages} />

      <CreatorBidSection creators={creatorImg} />
    </div>
  );
};

export default MainAuctions;