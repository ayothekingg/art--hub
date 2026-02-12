import type { products } from "..";
import type { AuctionCardT } from "./auction.model";

export type HeroImageT = {
  src: string;
  style?: React.CSSProperties;
  rotate?: string;
};

export interface ProductCardProps {
  product: typeof products[0];
  index: number;
  onViewProduct?: () => void;
  onSeeCreators?: () => void;
}

export interface ProductImageHoverProps {
  src: string;
  onViewClick?: () => void;
}

export interface AuctionCardProps {
  card: AuctionCardT;
  onSeeMore?: () => void;
  onSetReminder?: () => void;
}