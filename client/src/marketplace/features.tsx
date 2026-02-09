import React from "react";
import { Link } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { FaSliders } from "react-icons/fa6";
import { Listbox } from "@headlessui/react";
import { LiaArrowRightSolid } from "react-icons/lia";
import {
  byCategoryOptions,
  byArtistOptions,
  collectionYearOptions,
  sortOptions,
  minPrice,
  maxPrice,
} from "../data";
import FilterOption from "../components/FilterOption";
import FilterSection from "../components/FilterSection";
import ProductCard from "../components/ProductCard";
import { useMarketplaceFilters } from "../hooks/useMarketplaceFilters";
import { useFilteredProducts } from "../hooks/useFilteredProducts";

const Features: React.FC = () => {
  const {
    filters,
    setFilters,
    openSections,
    toggleSection,
    showMobileFilter,
    setShowMobileFilter,
    mobileSelectedCategory,
    handleMobileCategorySelect,
    handleToggle,
    handleArtistToggle,
    handleYearToggle,
  } = useMarketplaceFilters();

  const filteredProducts = useFilteredProducts(filters);

  return (
    <section className="w-full max-w-7xl mx-auto md:ml-30 ml-0 mt-10 md:mt-25 px-4 relative app-bg app-text">
      <div className="block md:hidden text-[18px] satoshi-bold -mt-2 mb-1 -ml-2">
        <span className="text-[#999]">Home/</span>
        <span className={mobileSelectedCategory ? "text-[#999]" : "app-text"}>
          Marketplace
        </span>
        {mobileSelectedCategory && (
          <span className="app-text">/{mobileSelectedCategory}</span>
        )}
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 w-full">
        <div className="hidden md:block relative w-full md:w-53.75 h-auto md:h-15">
          <input
            type="text"
            placeholder="Search"
            value={filters.search}
            onChange={(e) => setFilters(f => ({ ...f, search: e.target.value }))}
            className="search-input w-full min-h-12 md:h-15 pl-12 pr-4 rounded-[15px] outline-none border-none text-[18px] md:text-[24px] satoshi-bold"
          />
          <RiSearchLine className="absolute left-4 top-1/2 w-6 h-6 transform text-[#999999] -translate-y-1/2 pointer-events-none" />
        </div>

        <span className="block md:hidden text-[18px] -ml-2 mt-2 -mb-2 text-[#BCB7B7] italic satoshi">
          Results
        </span>

        <div className="mt-2 md:mt-0 md:ml-20 flex items-center w-full h-15 md:w-228.25 md:h-22.75 bg-white rounded-[15px] app-bg card-shadow">
          <span className="hidden md:block text-[24px] ml-10 text-[#333333] satoshi app-text">
            Results
          </span>

          <div className="relative md:hidden mr-2">
            <button
              className="flex items-center px-3 py-2 rounded-lg text-[#333] text-[18px] satoshi-medium app-bg app-text"
              onClick={() => setShowMobileFilter((prev) => !prev)}
            >
              Filter
              <span className="ml-2">
                {showMobileFilter ? <HiChevronUp /> : <HiChevronDown />}
              </span>
            </button>
            {showMobileFilter && (
              <div className="absolute left-0 mt-2 w-48 bg-white border sort-border rounded-lg shadow-lg z-50 p-3 app-bg app-text">
                {byCategoryOptions.map((option) => (
                  <button
                    key={option}
                    className={`w-full text-left py-2 px-2 rounded hover:bg-[#F4F2F2] ${
                      mobileSelectedCategory === option
                        ? "app-bg font-bold app-text"
                        : "text-[#292929]"
                    } app-text`}
                    onClick={() => handleMobileCategorySelect(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="ml-auto mr-2 md:mr-4 relative w-37.5 md:w-47.75 h-10 md:h-14.5 flex items-center app-bg app-text">
            <Listbox value={filters.sort} onChange={sort => setFilters(f => ({ ...f, sort }))}>
              <div className="relative w-full">
                <Listbox.Button className="w-full h-10 md:h-14.5 rounded-lg text-[18px] md:text-[24px] satoshi-medium bg-white md:border sort-border box-border outline-none appearance-none text-center flex items-center justify-center app-bg app-text">
                  <span className="sort-border">{filters.sort.label}</span>
                  <HiChevronDown className="ml-2 sort-chevron" size={20} />
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 w-full sort-options border sort-border rounded-lg shadow-lg z-50 max-h-60 overflow-auto app-bg app-text">
                  {sortOptions.slice(1).map((option) => (
                    <Listbox.Option
                      key={option.value}
                      value={option}
                      className={({ active }) =>
                        `cursor-pointer select-none py-2 px-4 text-[18px] md:text-[20px] sort-options sort-border ${
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
        </div>
      </div>

      <div className="hidden md:flex gap-10 mt-10">
        <div className="w-61 shrink-0">
          <div className="flex items-center gap-4 mb-3">
            <FaSliders className="w-9 h-10 text-[#616161] app-text" />
            <span className="text-[32px] text-[#333333] satoshi-medium app-text">
              Filter
            </span>
          </div>
          <div className="mb-10 w-61 h-1.5 rounded-lg bg-[#AFB091] " />
          <div className="mb-6 flex flex-col gap-8">
            <FilterSection
              title="By Category"
              open={openSections.category}
              onToggle={() => toggleSection("category")}
            >
              {byCategoryOptions.map((option) => (
                <FilterOption
                  key={option}
                  checked={filters.categories.includes(option)}
                  label={option}
                  onClick={() => handleToggle(option)}
                />
              ))}
            </FilterSection>

            <FilterSection
              title="By Price"
              open={openSections.price}
              onToggle={() => toggleSection("price")}
              chevronMargin="ml-8 md:ml-28"
            >
              <span className="text-[18px] md:text-[24px] text-[#292929] satoshi app-text">
                ${minPrice.toFixed(2)} - ${filters.price.toFixed(2)}
              </span>
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={filters.price}
                onChange={(e) => setFilters(f => ({ ...f, price: Number(e.target.value) }))}
                className="price-slider w-full md:w-59.25 h-1.5 border-none accent-[#333333] outline-none custom-slider"
              />
            </FilterSection>

            <FilterSection
              title="By Artist"
              open={openSections.artist}
              onToggle={() => toggleSection("artist")}
              chevronMargin="ml-8 md:ml-28"
            >
              {byArtistOptions.map((artist) => (
                <FilterOption
                  key={artist}
                  checked={filters.artists.includes(artist)}
                  label={artist}
                  onClick={() => handleArtistToggle(artist)}
                />
              ))}
            </FilterSection>

            <FilterSection
              title="Collection Year"
              open={openSections.year}
              onToggle={() => toggleSection("year")}
              chevronMargin="ml-8 md:ml-7"
            >
              {collectionYearOptions.map((year) => (
                <FilterOption
                  key={year}
                  checked={filters.years.includes(year)}
                  label={year}
                  onClick={() => handleYearToggle(year)}
                />
              ))}
            </FilterSection>
          </div>
        </div>
  
        <div className="flex-1 ml-3 mb-15">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/marketplace/product/${product.id}`}>
                <ProductCard
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              </Link>
            ))}
          </div>
          <div className="flex justify-center -ml-80 mt-40">
            <button className="px-8 py-3 w-62.25 h-18.25 app-bg app-text border sort-border rounded-lg text-[30px] satoshi-medium ">
              See More
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="grid grid-cols-1 gap-4 mt-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} to={`/marketplace/product/${product.id}`}>
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </Link>
          ))}
        </div>
        <div className="flex flex-row gap-4 ml-50 items-center mt-8 mb-8 space-y-2">
          <h3 className="text-[20px] satoshi">Load More</h3>
          <button
            className="w-13.5 h-13.5 flex items-center justify-center rounded-full app-bg border-main border-[0.41px]"
            aria-label="Load More"
            type="button"
          >
            <LiaArrowRightSolid
              style={{ width: "32.82px", height: "auto" }}
              className="featured-arrow"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;