import React from "react";
import {
  byCategoryOptions,
  byArtistOptions,
  collectionYearOptions,
  sortOptions,
  minPrice,
  maxPrice,
} from "@/data";
import MarketplaceLayout from "@/components/marketplace/MarketplaceLayout";
import MobileBreadcrumb from "@/components/marketplace/MobileBreadcrumb";
import SearchBar from "@/components/marketplace/SearchBar";
import ResultsDisplay from "@/components/marketplace/ResultsDisplay";
import MobileFilterDropdown from "@/components/marketplace/MobileFilterDropdown";
import SortDropdown from "@/components/marketplace/SortDropdown";
import FilterSidebar from "@/components/marketplace/FilterSidebar";
import ProductGrid from "@/components/marketplace/ProductGrid";
import { useMarketplaceFilters } from "@/hooks/useMarketplaceFilters";
import { useFilteredProducts } from "@/hooks/useFilteredProducts";
import useViewport from "@/hooks/useViewport";

const MOBILE_MAX = 5;

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
  const { isMobile } = useViewport();

  const displayedCount = isMobile
    ? Math.min(filteredProducts.length, MOBILE_MAX)
    : filteredProducts.length;

  return (
    <MarketplaceLayout
      mobileBreadcrumb={
        <MobileBreadcrumb selectedCategory={mobileSelectedCategory ?? ""} />
      }

      topBar={
        <>
          {/* Desktop search */}
          <SearchBar
            value={filters.search}
            onChange={(value) => setFilters((f) => ({ ...f, search: value }))}
          />

          {/* Mobile results count */}
          <div className="md:hidden flex">
            <ResultsDisplay
              visibleCount={displayedCount}
              totalCount={filteredProducts.length}
              isMobile={isMobile}
            />
          </div>

          {/* Results + sort bar (desktop and mobile filter) */}
          <div className="mt-2 md:mt-0 md:ml-20 flex items-center w-full h-15 md:w-228.25 md:h-22.75 bg-white rounded-[15px] app-bg card-shadow">
            <ResultsDisplay
              visibleCount={displayedCount}
              totalCount={filteredProducts.length}
            />

            <MobileFilterDropdown
              showFilter={showMobileFilter}
              onToggle={() => setShowMobileFilter((prev) => !prev)}
              categories={byCategoryOptions}
              selectedCategory={mobileSelectedCategory ?? ""}
              onSelectCategory={handleMobileCategorySelect}
            />

            <SortDropdown
              value={filters.sort}
              options={sortOptions}
              onChange={(sort) => setFilters((f) => ({ ...f, sort }))}
            />
          </div>
        </>
      }

      sidebar={
        <FilterSidebar
          openSections={openSections}
          toggleSection={toggleSection}
          categoryOptions={byCategoryOptions}
          artistOptions={byArtistOptions}
          yearOptions={collectionYearOptions}
          selectedCategories={filters.categories}
          selectedArtists={filters.artists}
          selectedYears={filters.years}
          priceValue={filters.price}
          minPrice={minPrice}
          maxPrice={maxPrice}
          onCategoryToggle={handleToggle}
          onArtistToggle={handleArtistToggle}
          onYearToggle={handleYearToggle}
          onPriceChange={(price) => setFilters((f) => ({ ...f, price }))}
        />
      }

      content={
        <ProductGrid
          products={filteredProducts}
          hasMore={true}
          onLoadMore={() => {}}
        />
      }

      mobileContent={
        <ProductGrid
          products={filteredProducts.slice(0, MOBILE_MAX)}
          hasMore={filteredProducts.length > MOBILE_MAX}
          onLoadMore={() => {}}
          isMobile={isMobile}
        />
      }
    />
  );
};

export default Features;