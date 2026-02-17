import React from "react";
import type { DropCardDetailsProps } from "@/data/types/drop.model";


const DropCardDetails: React.FC<DropCardDetailsProps> = ({
  status,
  date,
  title,
  description,
  creator,
  action,
  getStatusColor,
}) => {
  return (
    <div className="flex flex-col gap-4 md:gap-5 items-start justify-center w-full md:w-auto h-auto  mt-8 md:mt-0">
      {/* Desktop Status Badge */}
      <div
        className={`${getStatusColor(status)} hidden md:flex rounded-xl items-center justify-center px-10 py-2 text-white satoshi-bold text-[18px]`}
      >
        {status}
      </div>

      <span className="satoshi-medium text-[16px] md:text-[20px] text-[#999]">
        {date}
      </span>

      <h2 className="satoshi-medium text-[25px] md:text-[36px] app-text">
        {title}
      </h2>

      <p className="satoshi text-[16px] md:text-[20px] wrap-break-words max-w-xs md:max-w-md text-[#616161]">
        {description}
      </p>

      <span className="satoshi-medium text-[20px] md:text-[24px] app-text">
        Creator: <span className="text-[#006CA2]">{creator}</span>
      </span>

      {action && (
        <a
          href="#"
          className="text-[#006CA2] underline satoshi-medium text-[16px] md:text-[20px] cursor-pointer hover:text-[#005082] transition-colors"
        >
          {action}
        </a>
      )}
    </div>
  );
};

export default DropCardDetails;