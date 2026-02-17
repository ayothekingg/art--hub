import React from "react";
import DropCard from "@/components/drops/DropCard";
import SeeMoreButton from "@/components/shared/SeeMoreButton";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { dropCards } from "@/data";

const MainDrop: React.FC = () => {
  return (
    <div className="min-h-screen app-bg flex flex-col">
     
      <Breadcrumb 
        items={[
          { label: "Home", path: "/" },
          { label: "Auctions", path: "/Auctions" },
          { label: "LiveBid", path: "/LiveBid" },
          { label: "Main Drop" }
        ]}
        className="hidden md:block"
      />

      
      <div className="flex-1 flex flex-col items-center justify-start pt-20 mb-20 md:mb-40">
        <div className="text-[30px] md:text-[48px] text-center app-text satoshi-bold mb-8">
          Upcoming Drops
        </div>
        <div className="text-[18px] px-10 md:text-[32px] text-center text-[#616161] satoshi-medium mb-10">
          Turn on notifications so that no drops will miss you.
        </div>
        <button className="md:px-8 md:py-3 w-65.5 h-13.5 md:w-105 md:h-21 app-bg app-text border sort-border rounded-lg text-[24px] md:text-[36px] satoshi-bold ">
          Notify Me
        </button>
      </div>

     
      {dropCards.map((drop) => (
        <DropCard
          key={drop.id}
          image={drop.image}
          auctionStartTime={drop.auctionStartTime}
          auctionDurationHours={drop.auctionDurationHours}
          title={drop.title}
          description={drop.description}
          creator={drop.creator}
        />
      ))}

      <div className="hidden md:flex justify-center ">
        <SeeMoreButton onClick={() => {}} />
      </div>

    </div>
  );
};

export default MainDrop;