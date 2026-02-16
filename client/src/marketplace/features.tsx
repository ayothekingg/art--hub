import React, { useState } from "react";
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
  marketplaceProducts,
} from "../data";
import FilterOption from "../components/FilterOption";
import FilterSection from "../components/FilterSection";
import ProductCard from "../components/ProductCard";


const Features: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
  const [showByCategory, setShowByCategory] = useState(false);
  const [showByPrice, setShowByPrice] = useState(false);
  const [showByArtist, setShowByArtist] = useState(false);
  const [showCollectionYear, setShowCollectionYear] = useState(false);
  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  const [checkedArtists, setCheckedArtists] = useState<string[]>([]);
  const [checkedYears, setCheckedYears] = useState<string[]>([]);
  const [price, setPrice] = useState(minPrice);

  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [mobileSelectedCategory, setMobileSelectedCategory] = useState<
    string | null
  >(null);

  const handleMobileCategorySelect = (option: string) => {
    setMobileSelectedCategory(option);
    setCheckedCategories([option]);
    setShowMobileFilter(false);
  };

  const handleToggle = (option: string) => {
    let newChecked: string[];
    if (checkedCategories.includes(option)) {
      newChecked = [];
      setMobileSelectedCategory(null);
    } else {
      newChecked = [option];
      setMobileSelectedCategory(option);
    }
    setCheckedCategories(newChecked);
  };

  const handleArtistToggle = (artist: string) => {
    setCheckedArtists((prev) =>
      prev.includes(artist)
        ? prev.filter((item) => item !== artist)
        : [...prev, artist]
    );
  };

  const handleYearToggle = (year: string) => {
    setCheckedYears((prev) =>
      prev.includes(year)
        ? prev.filter((item) => item !== year)
        : [...prev, year]
    );
  };

  return (
    <section className="w-full max-w-7xl mx-auto md:ml-[120px] ml-0 mt-10 md:mt-[100px] px-4 relative app-bg app-text">
      
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
      
        <div className="hidden md:block relative w-full md:w-[215px] h-auto md:h-[60px]">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input w-full min-h-12 md:h-[60px] pl-12 pr-4 rounded-[15px] outline-none border-none text-[18px] md:text-[24px] satoshi-bold"
          />
          <RiSearchLine className="absolute left-4 top-1/2 w-6 h-6 transform text-[#999999] -translate-y-1/2 pointer-events-none" />
        </div>

        
        <span className="block md:hidden text-[18px] -ml-2 mt-2 -mb-2 text-[#BCB7B7] italic satoshi">
          Results
        </span>

    
        <div className="mt-2 md:mt-0 md:ml-20 flex items-center w-full h-[60px] md:w-[913px] md:h-[91px] bg-white rounded-[15px] app-bg card-shadow">
        
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

   
          <div className="ml-auto mr-2 md:mr-4 relative w-[150px] md:w-[191px] h-10 md:h-[58px] flex items-center app-bg app-text">
            <Listbox value={selectedSort} onChange={setSelectedSort}>
              <div className="relative w-full">
                <Listbox.Button className="w-full h-10 md:h-[58px] rounded-lg text-[18px] md:text-[24px] satoshi-medium bg-white md:border sort-border box-border outline-none appearance-none text-center flex items-center justify-center app-bg app-text">
                  <span className="sort-border">{selectedSort.label}</span>
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
 
        <div className="w-[244px] shrink-0">
          <div className="flex items-center gap-4 mb-3">
            <FaSliders className="w-9 h-10 text-[#616161] app-text" />
            <span className="text-[32px] text-[#333333] satoshi-medium app-text">
              Filter
            </span>
          </div>
          <div className="mb-10 w-[244px] h-1.5 rounded-lg bg-[#AFB091] " />
          <div className="mb-6 flex flex-col gap-8">
            <FilterSection
              title="By Category"
              open={showByCategory}
              onToggle={() => setShowByCategory((prev) => !prev)}
            >
              {byCategoryOptions.map((option) => (
                <FilterOption
                  key={option}
                  checked={checkedCategories.includes(option)}
                  label={option}
                  onClick={() => handleToggle(option)}
                />
              ))}
            </FilterSection>

            <FilterSection
              title="By Price"
              open={showByPrice}
              onToggle={() => setShowByPrice((prev) => !prev)}
              chevronMargin="ml-8 md:ml-28"
            >
              <span className="text-[18px] md:text-[24px] text-[#292929] satoshi app-text">
                ${minPrice.toFixed(2)} - ${price.toFixed(2)}
              </span>
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="price-slider w-full md:w-[237px] h-1.5 border-none accent-[#333333] outline-none custom-slider"
              />
            </FilterSection>

            <FilterSection
              title="By Artist"
              open={showByArtist}
              onToggle={() => setShowByArtist((prev) => !prev)}
              chevronMargin="ml-8 md:ml-28"
            >
              {byArtistOptions.map((artist) => (
                <FilterOption
                  key={artist}
                  checked={checkedArtists.includes(artist)}
                  label={artist}
                  onClick={() => handleArtistToggle(artist)}
                />
              ))}
            </FilterSection>

            <FilterSection
              title="Collection Year"
              open={showCollectionYear}
              onToggle={() => setShowCollectionYear((prev) => !prev)}
              chevronMargin="ml-8 md:ml-7"
            >
              {collectionYearOptions.map((year) => (
                <FilterOption
                  key={year}
                  checked={checkedYears.includes(year)}
                  label={year}
                  onClick={() => handleYearToggle(year)}
                />
              ))}
            </FilterSection>
          </div>
        </div>
  
        <div className="flex-1 ml-3 mb-15">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {marketplaceProducts.map((product) => (
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
            <button className="px-8 py-3 w-[249px] h-[73px] app-bg app-text border sort-border rounded-lg text-[30px] satoshi-medium ">
              See More
            </button>
          </div>
        </div>
      </div>

    
      <div className="md:hidden">
        <div className="grid grid-cols-1 gap-4 mt-6">
          {marketplaceProducts.map((product) => (
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
            className="w-[54px] h-[54px] flex items-center justify-center rounded-full app-bg border-main border-[0.41px]"
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
