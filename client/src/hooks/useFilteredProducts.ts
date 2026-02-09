import type { Filters } from "./useMarketplaceFilters";
import { marketplaceProducts } from "../data";

export function useFilteredProducts(filters: Filters) {
  return marketplaceProducts.filter(product => {

    if (
      filters.search &&
      typeof product.title === "string" &&
      !product.title.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }

    if (
      filters.categories.length &&
      (product as any).category !== undefined &&
      !filters.categories.includes((product as any).category)
    ) {
      return false;
    }

    if (
      filters.artists.length &&
      typeof product.creator === "string" &&
      !filters.artists.includes(product.creator)
    ) {
      return false;
    }

    if (
      filters.years.length &&
      (product as any).year !== undefined &&
      !filters.years.includes(String((product as any).year))
    ) {
      return false;
    }

    if (
      typeof product.price === "number" &&
      product.price > filters.price
    ) {
      return false;
    }
    return true;
  });
}