

export interface FilterOptionProps {
  checked: boolean;
  label: string;
  onClick: () => void;
}

export interface FilterSectionProps {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  chevronMargin?: string;
}

export interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

 export interface CartProductType {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  size?: string;
  price: string | number;
  quantity: number;
}

export interface CartState {
  cart: CartProductType[];
  addToCart: (product: CartProductType) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

export type Filters = {
  search: string;
  categories: string[];
  artists: string[];
  years: string[];
  price: number;
  sort: SortOption;
};


export interface SortOption {
  value: string;
  label: string;
}

export interface SortDropdownProps {
  value: SortOption;
  options: SortOption[];
  onChange: (option: SortOption) => void;
}



export type FilterSection = "category" | "price" | "artist" | "year";

export interface FilterSidebarProps {
  openSections: {
    category: boolean;
    price: boolean;
    artist: boolean;
    year: boolean;
  };
  toggleSection: (section: FilterSection) => void;
  categoryOptions: string[];
  artistOptions: string[];
  yearOptions: string[];
  selectedCategories: string[];
  selectedArtists: string[];
  selectedYears: string[];
  priceValue: number;
  minPrice: number;
  maxPrice: number;
  onCategoryToggle: (category: string) => void;
  onArtistToggle: (artist: string) => void;
  onYearToggle: (year: string) => void;
  onPriceChange: (price: number) => void;
}


export interface MarketplaceLayoutProps {
  topBar: React.ReactNode;
  sidebar: React.ReactNode;
  content: React.ReactNode;
  mobileContent: React.ReactNode;
  mobileBreadcrumb?: React.ReactNode;
}

export interface MobileBreadcrumbProps {
  selectedCategory: string;
}

export interface MobileFilterDropdownProps {
  showFilter: boolean;
  onToggle: () => void;
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

interface Product {
  id: string | number;
  image: string;
  title: string;
  price: number;
}

export interface ProductGridProps {
  products: Product[];
  hasMore: boolean;
  onLoadMore: () => void;
    isMobile?: boolean; 
  onViewportChange?: () => void; 
}

export interface ResultsDisplayProps {
  visibleCount: number;
  totalCount: number;
  isMobile?: boolean;
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}
