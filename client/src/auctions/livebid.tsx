import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DesktopLiveBid from "@/components/livebid/DesktopLiveBid";
import MobileLiveBid from "@/components/livebid/MobileLiveBid";
import { livebidMessages } from "@/data";

const LiveBid: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const auctionImg = location.state?.image;

  // Mock data - replace with actual data from props/context/API
  const currentBid = 4500;
  const tag = "Lost or Wither";
  const creator = "Stormy Rylie";
  const viewCount = 295;

  const handlePlaceBid = (amount: number) => {
    console.log("Place bid:", amount);
    // TODO: Implement bid logic
  };

  const handleSeeUpcoming = () => {
    console.log("See upcoming drops");
    navigate("/auctions");
  };

  const handleSendMessage = (message: string) => {
    console.log("Send message:", message);
    // TODO: Implement chat logic
  };

  return (
    <>
      <DesktopLiveBid
        auctionImg={auctionImg}
        currentBid={currentBid}
        tag={tag}
        creator={creator}
        messages={livebidMessages}
        onPlaceBid={handlePlaceBid}
        onSeeUpcoming={handleSeeUpcoming}
      />

      <MobileLiveBid
        auctionImg={auctionImg}
        currentBid={currentBid}
        tag={tag}
        viewCount={viewCount}
        messages={livebidMessages}
        onSendMessage={handleSendMessage}
      />
    </>
  );
};

export default LiveBid;