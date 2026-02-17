import React from "react";
import CountdownTimer from "./CountdownTimer";
import type { DropCardImageProps } from "@/data/types/drop.model";

const DropCardImage: React.FC<DropCardImageProps> = ({
  image,
  title,
  status,
  endedTime,
  targetDate,
  getStatusColor,
  getActionButtonStyle,
  getActionButtonText,
}) => {
  return (
    <div className="w-97.5 md:w-170.75 h-56.25 md:h-110.25 overflow-hidden rounded-lg md:mr-10 relative">
      <img src={image} alt={title} className="w-full h-full object-cover" />

      {/* Mobile Status Badge */}
      <div
        className={`${getStatusColor(status)} flex md:hidden rounded-lg items-center justify-center px-4 py-1 text-white satoshi-bold text-[12px] absolute top-4 right-4 z-20`}
      >
        {status}
      </div>

      {/* Timer/Info Overlay */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-5 w-90 h-20 md:w-144.5 md:h-32.5 bg-white/15 backdrop-blur-[2px] border border-white rounded-lg flex flex-col items-start justify-center px-6 z-10">
        {status === "ENDED" ? (
          <>
            <span className="text-white satoshi-medium text-[16px] md:text-[28px] whitespace-nowrap mb-1">
              Auction Ended
            </span>
            <div className="flex items-center gap-6 w-full">
              <span className="text-white satoshi-bold text-[16px] md:text-[32px] whitespace-nowrap">
                {endedTime || "5 hours ago"}
              </span>
              <button
                className={`${getActionButtonStyle(status)} hidden md:block text-white satoshi-bold rounded-4xl px-4 py-2 md:px-10 text-[14px] md:text-[24px] ml-auto hover:opacity-90 transition-opacity`}
                aria-label="View auction details"
              >
                {getActionButtonText(status)}
              </button>
            </div>
          </>
        ) : (
          <>
            <span className="text-white satoshi-medium text-[16px] md:text-[28px] whitespace-nowrap mb-1">
              Time Remaining
            </span>
            <div className="flex items-center gap-6 w-full">
              {targetDate ? (
                <CountdownTimer targetDate={targetDate} />
              ) : (
                <span className="text-white satoshi-bold text-[16px] md:text-[40px] whitespace-nowrap">
                  06hr : 40mins: 15s
                </span>
              )}
              <button
                className={`${getActionButtonStyle(status)} hidden md:block text-white satoshi-bold rounded-4xl px-4 py-2 md:px-10 text-[14px] md:text-[24px] ml-auto hover:opacity-90 transition-opacity`}
                aria-label="Join auction"
              >
                {getActionButtonText(status)}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DropCardImage;