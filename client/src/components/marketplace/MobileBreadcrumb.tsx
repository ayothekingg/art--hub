import React from "react";
import type { MobileBreadcrumbProps } from "@/data/types/marketplace.model";

const MobileBreadcrumb: React.FC<MobileBreadcrumbProps> = ({
  selectedCategory,
}) => {
  return (
    <div className="block md:hidden text-[18px] satoshi-bold -mt-2 mb-1 -ml-2">
      <span className="text-[#999]">Home/</span>
      <span className={selectedCategory ? "text-[#999]" : "app-text"}>
        Marketplace
      </span>
      {selectedCategory && (
        <span className="app-text">/{selectedCategory}</span>
      )}
    </div>
  );
};

export default MobileBreadcrumb;