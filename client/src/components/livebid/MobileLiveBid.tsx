import React from "react";
import { useNavigate } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import FlyingHeartButton from "./FlyingHeartButton";
import CloseButton from "./CloseButton";
import LiveBadge from "./LiveBadge";
import CurrentBid from "./CurrentBid";
import ChatBox from "./ChatBox";
import ChatInput from "./ChatInput";
import type { MobileLiveBidProps } from "@/data/types/livebid.model";

const MobileLiveBid: React.FC<MobileLiveBidProps> = ({
  auctionImg,
  currentBid,
  tag,
  viewCount,
  messages,
  onSendMessage,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex md:hidden flex-col items-center justify-center h-screen w-full relative"
      style={{
        backgroundImage: `url(${auctionImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Tag */}
      <span className="absolute top-7 left-6 text-[16px] satoshi-bold text-white">
        Tag: {tag}
      </span>

      {/* Close Button */}
      <CloseButton
        variant="mobile"
        className="absolute top-6 right-6"
        onClick={() => navigate(-1)}
      />

      {/* View Count */}
      <div className="absolute top-6 right-15 w-15 h-6.75 bg-white/40 rounded-[10px] flex items-center justify-center gap-1">
        <IoEyeSharp className="text-white text-[15px]" />
        <span className="text-white text-[13px] satoshi-bold tracking-widest">
          {viewCount}
        </span>
      </div>

      {/* Live Badge */}
      <LiveBadge size="small" className="absolute top-6 right-32" />

      {/* Current Bid */}
      <div className="flex items-center justify-center -mt-10">
        <CurrentBid amount={currentBid} size="small" />
      </div>

      {/* Chat Messages */}
      <ChatBox
        messages={messages}
        variant="mobile"
        className="absolute bottom-22 left-7 right-1"
      />

      {/* Chat Input */}
      <div className="absolute bottom-6 left-6">
        <ChatInput onSend={onSendMessage} />
      </div>

      {/* Heart Button */}
      <div className="absolute bottom-6 right-3">
        <FlyingHeartButton heartCount={1} />
      </div>
    </div>
  );
};

export default MobileLiveBid;