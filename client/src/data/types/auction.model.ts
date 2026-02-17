
export type AuctionCardT = {
  image: string;
  number: string;
  title: [string, string];
  bullet: boolean;
  start: string;
  description: string;
  loader: number;
};

export interface BidButtonProps {
  currentBid: string;
  onClick?: () => void;
}



export interface CreatorCardProps {
  image: string;
  name?: string;
  highestBid?: number | string;
}

export interface AuctionCarouselProps {
  auctions: any[];
}

export interface CreatorBidSectionProps {
  creators: any[];
}

export type MainAuctionCardProps = {
  image: string;
};
