 export interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
}

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

export interface BidInputBoxProps {
  placeholder?: string;
  onSend?: (value: string) => void;
}

export interface ChatMessageProps {
  profileImg: string;
  name: string;
  message: string;
}

export interface CreatorCardProps {
  image: string;
  name?: string;
  highestBid?: number | string;
}

export interface FlyingHeartProps {
  offset: number;
  color: string;
  size: number;
  rotate: number;
}

export interface FlyingHeartButtonProps {
  className?: string;
  heartCount?: number;
}

export interface MainAuctionCardProps {
  image: string;
}