import { useState } from "react";
import { sortOptions, maxPrice } from "../data";

type SortOption = typeof sortOptions[0];

export type Filters = {
  search: string;
  categories: string[];
  artists: string[];
  years: string[];
  price: number; 
  sort: SortOption;
};

export function useMarketplaceFilters() {
  const [filters, setFilters] = useState<Filters>({
    search: "",
    categories: [],
    artists: [],
    years: [],
    price: maxPrice, 
    sort: sortOptions[0],
  });

  const [openSections, setOpenSections] = useState({
    category: false,
    price: false,
    artist: false,
    year: false,
  });
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [mobileSelectedCategory, setMobileSelectedCategory] = useState<string | null>(null);

  const toggleSection = (key: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleMobileCategorySelect = (option: string) => {
    setMobileSelectedCategory(option);
    setFilters(f => ({
      ...f,
      categories: [option],
    }));
    setShowMobileFilter(false);
  };

  const handleToggle = (option: string) => {
    setMobileSelectedCategory(option);
    setFilters(f => ({
      ...f,
      categories: f.categories.includes(option) ? [] : [option],
    }));
  };

  const handleArtistToggle = (artist: string) => {
    setFilters(f => ({
      ...f,
      artists: f.artists.includes(artist)
        ? f.artists.filter(a => a !== artist)
        : [...f.artists, artist],
    }));
  };

  const handleYearToggle = (year: string) => {
    setFilters(f => ({
      ...f,
      years: f.years.includes(year)
        ? f.years.filter(y => y !== year)
        : [...f.years, year],
    }));
  };

  return {
    filters,
    setFilters,
    openSections,
    toggleSection,
    showMobileFilter,
    setShowMobileFilter,
    mobileSelectedCategory,
    setMobileSelectedCategory,
    handleMobileCategorySelect,
    handleToggle,
    handleArtistToggle,
    handleYearToggle,
  };
}