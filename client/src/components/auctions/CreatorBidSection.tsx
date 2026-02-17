import CreatorCard from "./CreatorCard";
import BidButton from "./BidButton";
import LoadMoreButton from "../shared/LoadMoreButton";
import type { CreatorBidSectionProps } from "@/data/types/auction.model";

const CreatorBidSection = ({ creators }: CreatorBidSectionProps) => {
  return (
    <>
      <div className="text-[20px] md:text-[36px] satoshi-bold mb-6 mt-10 md:mt-20 app-text">
        Top bids from popular creators
      </div>
      
      <div className="flex flex-col md:flex-row md:justify-between gap-6 mr-30 md:gap-0 mb-10 md:mt-20">
        {creators.map((creator, idx) => (
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
                Highest Bid : <span className="app-text">{creator.highestBid}</span>
              </div>

              <div className="mt-10 -ml-2 md:ml-0 mb-10 md:mb-30">
                <BidButton currentBid={creator.currentBid} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button - Mobile Only */}
      <div className="flex flex-row gap-4 items-center -mt-5 mb-8 md:hidden justify-center w-full">
        <LoadMoreButton onClick={() => {}} />
      </div>
    </>
  );
};

export default CreatorBidSection;