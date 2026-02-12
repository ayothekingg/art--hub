export interface AddToCartButtonProps {
  onAddToCart: () => void;
  size?: "mobile" | "desktop";
}

import type { ReactNode } from "react";
export interface CollapsibleSectionProps {
  title: string;
  children: ReactNode;
}

interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  creator: string;
  location: string;
  views: string;
  description: string;
  listing: string;
  status: string;
}

export interface ProductInfoProps {
  creator: string;
  location: string;
  views: string;
  size?: "mobile" | "desktop";
}

export interface CollectionCarouselProps {
  products: Product[];
}

export interface CollectionProductCardProps {
  image: string;
  title: string;
  price: number;
}

export interface DesktopProductViewProps {
  product: Product;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onAddToCart: () => void;
}

export interface MobileProductViewProps {
  product: Product;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onAddToCart: () => void;
}

export interface ProductDetailsProps {
  description: string;
  listing: string;
  status: string;
  showDividers?: boolean;
}


export interface QuantitySelectorProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  size?: "mobile" | "desktop";
}