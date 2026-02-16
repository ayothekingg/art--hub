import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import BidInputBox from "../components/BidInputBox";
import FlyingHeartButton from "../components/FlyingHeartButton";
import { IoEyeSharp } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { LiaArrowRightSolid } from "react-icons/lia";
import ChatMessage from "../components/ChatMessage";
import { livebidMessages } from "../data";

const LiveBid: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const auctionImg = location.state?.image;

  return (
    <>
      <div className="min-h-screen app-bg hidden md:flex flex-col">
        <div className="hidden md:flex items-center text-[24px] satoshi-medium ml-30 pt-12.5 mb-15">
          <Link to="/" className="text-[#999] hover:underline">
            Home
          </Link>
          <span className=" text-[#999]">/</span>
          <Link to="/Auctions" className="text-[#999] hover:underline">
            Auctions
          </Link>
          <span className=" text-[#999]">/</span>
          <span className="app-text">Live Bid</span>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-310 h-202 bg-transparent border mb-10 flex">
            
            <div className="md:w-155 md:h-201.5 shrink-0 relative">
              <button
                className="absolute top-6 left-8 z-10 w-12.5 h-12.5 bg-white/20 dark:bg-[#232323] rounded-full flex items-center justify-center shadow"
                aria-label="Close"
                type="button"
              >
                <AiOutlineClose className="text-3xl text-white dark:text-white" />
              </button>
              <div className="absolute top-6 right-8 z-10 w-26 h-9.75 bg-[#4693ED] rounded-[40px] flex items-center justify-center">
                <span className="text-white text-[20px] satoshi-bold tracking-widest">
                  LIVE
                </span>
              </div>
              <div className="absolute bottom-10 left-12 z-10">
                <span className="text-[24px] satoshi-bold text-white ">
                  Tag: Lost or Wither
                </span>
              </div>
              <img
                src={auctionImg}
                alt="Auction"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className=" text-white text-[48px] satoshi-bold ">
                  Current bid $4500
                </span>
              </div>
            </div>
            
            <div className="flex flex-col items-start gap-5 ml-10 w-101">
              <div className="h-155.75 bg-transparent -ml-3 rounded-[25px] p-4 overflow-y-auto mb-2 flex flex-col gap-4 no-scrollbar">
                {livebidMessages.map((msg) => (
                  <ChatMessage
                    key={msg.id}
                    profileImg={msg.profileImg}
                    name={msg.name}
                    message={msg.message}
                  />
                ))}
              </div>
              <div className="text-[20px] md:text-[20px] text-[#616161] italic satoshi-medium">
                Creator : Stormy Rylie
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
        <div className="hidden md:flex items-center justify-start mt-2 mb-25 ml-30 gap-8">
          <span className="text-[36px] satoshi-bold app-text">
            See upcoming drops
          </span>
          <button
            className="w-16 h-16 flex items-center justify-center rounded-full bg-transparent sort-border border"
            aria-label="See creators"
            type="button"
          >
            <LiaArrowRightSolid
              style={{ width: "32.82px", height: "auto" }}
              className="app-text"
            />
          </button>
        </div>
      </div>

      
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
        <span className="absolute top-7 left-6 text-[16px] satoshi-bold text-white ">
          Tag: Lost or Wither
        </span>
        <button
          className="absolute top-6 right-6 text-white text-2xl"
          onClick={() => navigate(-1)}
        >
          <AiOutlineClose />
        </button>
        <div className="absolute top-6 right-15 w-15 h-6.75 bg-white/40 rounded-[10px] flex items-center justify-center gap-1">
          <IoEyeSharp className="text-white text-[15px]" />
          <span className="text-white text-[13px] satoshi-bold tracking-widest">
            295
          </span>
        </div>
        <div className="absolute top-6 right-32 w-12.25 h-6.75 bg-[#006CA2] rounded-[10px] flex items-center justify-center">
          <span className="text-white text-[13px] p-x-y-2 satoshi-bold tracking-widest">
            LIVE
          </span>
        </div>
        <div className="flex items-center justify-center -mt-10">
          <span className="text-white text-[30px] satoshi-bold">
            Current bid $4500
          </span>
        </div>

        <div className="absolute bottom-22 left-7 right-1 w-[80%] max-h-62.5 overflow-y-auto flex flex-col gap-1 no-scrollbar">
          {livebidMessages.map((msg) => (
            <ChatMessage
              key={msg.id}
              profileImg={msg.profileImg}
              name={msg.name}
              message={msg.message}
            />
          ))}
        </div>

        <div className="absolute bottom-6 left-6 ">
          <div className="w-75.5 h-12.5 flex items-center px-4 bg-transparent rounded-[30px] border border-white">
            <input
              type="text"
              placeholder="Join Conversation..."
              className="flex-1 bg-transparent outline-none text-[15px] text-white placeholder:text-white"
            />
            <button type="button" className="ml-3">
              <RiSendPlaneFill className="text-[28px] text-white" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-6 right-3 ">
          <FlyingHeartButton heartCount={1} />
        </div>
      </div>
    </>
  );
};

export default LiveBid;