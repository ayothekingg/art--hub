import React from "react";
import type { ResultsDisplayProps } from "@/data/types/marketplace.model";

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  visibleCount,
  totalCount,
  isMobile = false,
}) => {
  const text = `${isMobile ? "Showing" : "See"} ${totalCount === 0 ? 0 : 1}-${Math.min(visibleCount, totalCount)} of ${totalCount} results`;

  if (isMobile) {
    return (
      <span className="block md:hidden text-[18px] -ml-2 mt-2 -mb-2 text-[#BCB7B7] italic satoshi">
        {text}
      </span>
    );
  }

  return (
    <span className="hidden md:block text-[24px] ml-10 text-[#333333] satoshi app-text">
      {text}
    </span>
  );
};

export default ResultsDisplay;