import React from "react";
import { FaCheck } from "react-icons/fa6";

interface FilterOptionProps {
  checked: boolean;
  label: string;
  onClick: () => void;
}

const FilterOption: React.FC<FilterOptionProps> = ({ checked, label, onClick }) => (
  <label className="flex items-center gap-3 cursor-pointer select-none app-text">
    <span
      className="option-check flex items-center justify-center w-6 h-6 rounded border-[#B0B0B0] border-none"
      onClick={onClick}
    >
      {checked && <FaCheck className="option-check-icon text-[16px]" />}
    </span>
    <span className="satoshi text-[18px] md:text-[24px] text-[#292929] app-text">{label}</span>
  </label>
);

export default FilterOption;