import React from "react";

interface DropCardProps {
  image: string;
  status: string;
  date: string;
  title: string;
  description: string;
  creator: string;
  action: string;
  endedTime?: string;
}

const getStatusColor = (status: string) => {
  if (status === "UPCOMING") return "bg-[#4693ED]";
  if (status === "LIVE NOW") return "bg-[#27AE60]";
  if (status === "ENDED") return "bg-[#BDBDBD]";
  return "bg-[#4693ED]";
};

const DropCard: React.FC<DropCardProps> = ({
  image,
  status,
  date,
  title,
  description,
  creator,
  action,
  endedTime,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start ml-2.5 md:ml-[120px]">
      
      <div className="w-[390px] md:w-[683px] h-[225px] md:h-[441px] overflow-hidden rounded-lg md:mr-10 relative">
        <img src={image} alt="Drop" className="w-full h-full object-cover" />

      <div
          className={`${getStatusColor(status)} flex md:hidden rounded-lg items-center justify-center px-4 py-1 text-white satoshi-bold text-[12px] absolute top-4 right-4 z-20`}
        >
          {status}
        </div>

       
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-5 w-[360px] h-20 md:w-[578px] md:h-[130px] bg-white/15 backdrop-blur-[2px] border border-white rounded-lg flex flex-col items-start justify-center px-6 z-10">
          {status === "ENDED" ? (
            <>
              <span className="text-white satoshi-medium text-[16px] md:text-[28px] whitespace-nowrap mb-1">
                Auction Ended
              </span>
              <div className="flex items-center gap-6 w-full">
                <span className="text-white satoshi-bold text-[16px] md:text-[32px] whitespace-nowrap">
                  {endedTime || "5 hours ago"}
                </span>
                <button className="bg-[#BDBDBD] hidden md:block text-white satoshi-bold rounded-4xl px-4 py-2 md:px-10 text-[14px] md:text-[24px] ml-auto">
                  View
                </button>
              </div>
            </>
          ) : (
            <>
              <span className="text-white satoshi-medium text-[16px] md:text-[28px] whitespace-nowrap mb-1">
                Time Remaining
              </span>
              <div className="flex items-center gap-6 w-full">
                <span className="text-white satoshi-bold text-[16px] md:text-[40px] whitespace-nowrap">
                  06hr : 40mins: 15s
                </span>
                <button className="bg-[#4693ED] hidden md:block text-white satoshi-bold rounded-4xl px-4 py-2 md:px-10 text-[14px] md:text-[24px] ml-auto">
                  Join
                </button>
              </div>
            </>
          )}
        </div>
      </div>
     
      <div className="flex flex-col gap-4 md:gap-8 items-start justify-center w-full md:w-auto h-auto md:h-[441px] mt-8 mb-10 md:mb-30 md:mt-0">
        <div
          className={`${getStatusColor(status)} hidden md:flex rounded-xl items-center justify-center px-10 py-2 text-white satoshi-bold text-[18px] md:text-[18px]`}
        >
          {status}
        </div>
        <span className="text-app satoshi-medium text-[16px] md:text-[20px]">
          {date}
        </span>
        <span className="text-app satoshi-medium text-[25px] md:text-[36px]">
          {title}
        </span>
        <span className="text-app satoshi text-[16px] md:text-[20px] wrap-break-words max-w-xs md:max-w-md">
          {description}
        </span>
        <span className="text-app satoshi-medium text-[20px] md:text-[24px]">
          Creator : <span className="text-[#006CA2]">{creator}</span>
        </span>
        {action && (
          <span className="text-app text-[#006CA2] underline satoshi-medium text-[16px] md:text-[20px] cursor-pointer">
            {action}
          </span>
        )}
      </div>
    </div>
  );
};

export default DropCard;
