import React from "react";
import { Link } from "react-router-dom";
import DropCard from "../components/DropCard";
import { dropCards } from "../data";

const MainDrop: React.FC = () => {
  return (
    <div className="min-h-screen app-bg flex flex-col">
     
      <div className="hidden md:block items-center text-[24px] satoshi-medium ml-30 pt-12.5">
        <Link to="/" className="text-[#999] hover:underline">
          Home
        </Link>
        <span className=" text-[#999]">/</span>
        <Link to="/Auctions" className="text-[#999] hover:underline">
          Auctions
        </Link>
        <span className=" text-[#999]">/</span>
        <Link to="/LiveBid" className="text-[#999] hover:underline">
          LiveBid
        </Link>
        <span className=" text-[#999]">/</span>
        <span className="app-text">Main Drop</span>
      </div>

      
      <div className="flex-1 flex flex-col items-center justify-start pt-20 mb-20">
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
          status={drop.status}
          date={drop.date}
          title={drop.title}
          description={drop.description}
          creator={drop.creator}
          action={drop.action}
        />
      ))}

       <div className="hidden md:flex justify-center ">
            <button className="px-8 py-3 w-62.25 h-18.25 app-bg app-text border sort-border rounded-lg text-[30px] satoshi-medium ">
              See More
            </button>
          </div>


    </div>
  );
};

export default MainDrop;
