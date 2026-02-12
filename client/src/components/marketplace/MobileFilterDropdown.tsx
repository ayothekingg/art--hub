import React from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import type { MobileFilterDropdownProps } from "@/data/types/marketplace.model";

const MobileFilterDropdown: React.FC<MobileFilterDropdownProps> = ({
  showFilter,
  onToggle,
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="relative md:hidden mr-2">
      <button
        className="flex items-center px-3 py-2 rounded-lg text-[#333] text-[18px] satoshi-medium app-bg app-text"
        onClick={onToggle}
      >
        Filter
        <span className="ml-2">
          {showFilter ? <HiChevronUp /> : <HiChevronDown />}
        </span>
      </button>
      {showFilter && (
        <div className="absolute left-0 mt-2 w-48 bg-white border sort-border rounded-lg shadow-lg z-50 p-3 app-bg app-text">
          {categories.map((option) => (
            <button
              key={option}
              className={`w-full text-left py-2 px-2 rounded hover:bg-search-input ${
                selectedCategory === option
                  ? "app-bg font-bold app-text"
                  : "text-[#292929]"
              } app-text`}
              onClick={() => onSelectCategory(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileFilterDropdown;