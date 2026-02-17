import React from "react";
import { FaCheck } from "react-icons/fa6";
import type { FilterOptionProps } from "@/data/types/marketplace.model";

const FilterOption: React.FC<FilterOptionProps> = ({ checked, label, onClick }) => (
  <label className="flex items-center gap-3 cursor-pointer select-none app-text">
    <span
      className="option-check flex items-center justify-center w-6 h-6 rounded border-[#B0B0B0] border-none"
      onClick={onClick}
    >
      {checked && <FaCheck className="option-check-icon text-base md:text-lg lg:text-xl" />}
    </span>
    <span className="satoshi text-base md:text-lg lg:text-xl text-[#292929] app-text">{label}</span>
  </label>
);

export default FilterOption;