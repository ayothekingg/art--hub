import React from "react";
import { HiChevronDown } from "react-icons/hi2";
import { Listbox } from "@headlessui/react";
import type { SortDropdownProps } from "@/data/types/marketplace.model";

const SortDropdown: React.FC<SortDropdownProps> = ({
  value,
  options,
  onChange,
}) => {
  return (
    <div className="ml-auto mr-2 md:mr-4 relative w-37.5 md:w-47.75 h-10 md:h-14.5 flex items-center app-bg app-text">
      <Listbox value={value} onChange={onChange}>
        <div className="relative w-full">
          <Listbox.Button className="w-full h-10 md:h-14.5 rounded-lg text-base md:text-lg lg:text-xl satoshi-medium bg-white md:border sort-border box-border outline-none appearance-none text-center flex items-center justify-center app-bg app-text">
            <span className="sort-border">{value.label}</span>
            <HiChevronDown className="ml-2 sort-chevron" size={20} />
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 w-full sort-options border sort-border rounded-lg shadow-lg z-50 max-h-60 overflow-auto app-bg app-text">
            {options.slice(1).map((option) => (
              <Listbox.Option
                key={option.value}
                value={option}
                className={({ active }) =>
                  `cursor-pointer select-none py-2 px-4 text-base md:text-lg lg:text-xl sort-options sort-border ${
                    active ? "app-bg" : "app-text"
                  }`
                }
              >
                {option.label}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default SortDropdown;