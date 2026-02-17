import React from "react";
import { useNavigate } from "react-router-dom";
import { LiaArrowRightSolid } from "react-icons/lia";
import BidInputBox from "./BidInputBox";
import FlyingHeartButton from "./FlyingHeartButton";
import CloseButton from "./CloseButton";
import LiveBadge from "./LiveBadge";
import CurrentBid from "./CurrentBid";
import ChatBox from "./ChatBox";
import Breadcrumb from "../shared/Breadcrumb";
import type { DesktopLiveBidProps } from "@/data/types/livebid.model";

const DesktopLiveBid: React.FC<DesktopLiveBidProps> = ({
  auctionImg,
  currentBid,
  tag,
  creator,
  messages,
  onSeeUpcoming,
}) => {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen app-bg hidden md:flex flex-col">
      {/* Breadcrumb */}
        <div className="hidden md:block ">
          <Breadcrumb
            items={[
              { label: "Home", path: "/" },
              { label: "Auctions", path: "/Auctions" },
              { label: "Live Bid" }
            ]}
          />
        </div>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center">
        <div className="w-310 h-202 bg-transparent border mb-10 flex">
          {/* Left: Auction Image */}
          <div className="md:w-155 md:h-201.5 shrink-0 relative">
            <CloseButton
              className="absolute top-6 left-8 z-10"
              onClick={() => navigate(-1)}
            />

            <LiveBadge className="absolute top-6 right-8 z-10" />

            <div className="absolute bottom-10 left-12 z-10">
              <span className="text-[24px] satoshi-bold text-white">
                Tag: {tag}
              </span>
            </div>

            <img
              src={auctionImg}
              alt="Auction"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <CurrentBid amount={currentBid} />
            </div>
          </div>

          {/* Right: Chat & Bid */}
          <div className="flex flex-col items-start gap-5 ml-10 w-101">
            <ChatBox messages={messages} variant="desktop" />

            <div className="text-[20px] text-[#616161] italic satoshi-medium">
              Creator : {creator}
            </div>

            <div className="flex items-center gap-15 relative">
              <div className="hidden md:flex items-center gap-15 relative">
                <BidInputBox placeholder="Place Bid" />
              </div>
              <FlyingHeartButton heartCount={1} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="hidden md:flex items-center justify-start mt-2 mb-25 ml-30 gap-8">
        <span className="text-[36px] satoshi-bold app-text">
          See upcoming drops
        </span>
        <button
          className="w-16 h-16 flex items-center justify-center rounded-full bg-transparent sort-border border transition-transform hover:scale-110"
          aria-label="See upcoming drops"
          type="button"
          onClick={onSeeUpcoming}
        >
          <LiaArrowRightSolid className="w-8 h-8 app-text" />
        </button>
      </div>
    </div>
  );
};

export default DesktopLiveBid;
