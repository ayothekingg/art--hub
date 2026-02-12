import React from "react";
import { RiSearchLine } from "react-icons/ri";
import type { SearchBarProps } from "@/data/types/marketplace.model";

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="hidden md:block relative w-full md:w-53.75 h-auto md:h-15">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input w-full min-h-12 md:h-15 pl-12 pr-4 rounded-[15px] outline-none border-none text-[18px] md:text-[24px] satoshi-bold"
      />
      <RiSearchLine className="absolute left-4 top-1/2 w-6 h-6 transform text-[#999999] -translate-y-1/2 pointer-events-none" />
    </div>
  );
};

export default SearchBar;