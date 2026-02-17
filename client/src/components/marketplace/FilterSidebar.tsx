import React from "react";
import { FaSliders } from "react-icons/fa6";
import FilterOption from "./FilterOption";
import FilterSection from "./FilterSection";
import type { FilterSidebarProps } from "@/data/types/marketplace.model";

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  openSections,
  toggleSection,
  categoryOptions,
  artistOptions,
  yearOptions,
  selectedCategories,
  selectedArtists,
  selectedYears,
  priceValue,
  minPrice,
  maxPrice,
  onCategoryToggle,
  onArtistToggle,
  onYearToggle,
  onPriceChange,
}) => {
  return (
    <div className="w-48 md:w-56 lg:w-61 shrink-0 px-2 md:px-4 lg:px-0">
      <div className="flex items-center gap-4 mb-3">
        <FaSliders className="w-8 h-8 md:w-9 md:h-10 text-[#616161] app-text" />
        <span className="text-xl md:text-2xl lg:text-3xl text-[#333333] satoshi-medium app-text">
          Filter
        </span>
      </div>
      <div className="mb-10 w-full h-1.5 rounded-lg bg-[#AFB091]" />
      <div className="mb-6 flex flex-col gap-6 md:gap-8">
        <FilterSection
          title="By Category"
          open={openSections.category}
          onToggle={() => toggleSection("category")}
        >
          {categoryOptions.map((option) => (
            <FilterOption
              key={option}
              checked={selectedCategories.includes(option)}
              label={option}
              onClick={() => onCategoryToggle(option)}
            />
          ))}
        </FilterSection>

        <FilterSection
          title="By Price"
          open={openSections.price}
          onToggle={() => toggleSection("price")}
          chevronMargin="ml-8 md:ml-20 lg:ml-28"
        >
          <span className="text-base md:text-lg lg:text-xl text-[#292929] satoshi app-text">
            ${minPrice.toFixed(2)} - ${priceValue.toFixed(2)}
          </span>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={priceValue}
            onChange={(e) => onPriceChange(Number(e.target.value))}
            className="price-slider w-full md:w-48 lg:w-59.25 h-1.5 border-none accent-[#333333] outline-none custom-slider"
          />
        </FilterSection>

        <FilterSection
          title="By Artist"
          open={openSections.artist}
          onToggle={() => toggleSection("artist")}
          chevronMargin="ml-8 md:ml-20 lg:ml-28"
        >
          {artistOptions.map((artist) => (
            <FilterOption
              key={artist}
              checked={selectedArtists.includes(artist)}
              label={artist}
              onClick={() => onArtistToggle(artist)}
            />
          ))}
        </FilterSection>

        <FilterSection
          title="Collection Year"
          open={openSections.year}
          onToggle={() => toggleSection("year")}
          chevronMargin="ml-8 md:ml-7"
        >
          {yearOptions.map((year) => (
            <FilterOption
              key={year}
              checked={selectedYears.includes(year)}
              label={year}
              onClick={() => onYearToggle(year)}
            />
          ))}
        </FilterSection>
      </div>
    </div>
  );
};

export default FilterSidebar;