import React from "react";
import { HiChevronUp, HiChevronDown } from "react-icons/hi2";

interface FilterSectionProps {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  chevronMargin?: string;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  open,
  onToggle,
  children,
  chevronMargin = "ml-8 md:ml-16",
}) => (
  <div className="flex flex-col">
    <span
      onClick={onToggle}
      className="py-2 rounded text-left text-[22px] md:text-[28px] satoshi-medium cursor-pointer flex items-center select-none app-bg app-text"
    >
      {title}
      <span className={chevronMargin}>
        {open ? <HiChevronUp /> : <HiChevronDown />}
      </span>
    </span>
    {open && <div className="mt-4 md:mt-6 flex flex-col gap-3">{children}</div>}
  </div>
);

export default FilterSection;