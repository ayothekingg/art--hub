export interface BidInputBoxProps {
  placeholder?: string;
  onSend?: (value: string) => void;
}

export interface Message {
  id: number;
  profileImg: string;
  name: string;
  message: string;
}

export interface ChatBoxProps {
  messages: Message[];
  variant?: "desktop" | "mobile";
  className?: string;
}

export interface ChatInputProps {
  onSend?: (message: string) => void;
  placeholder?: string;
  className?: string;
}

export interface ChatMessageProps {
  profileImg: string;
  name: string;
  message: string;
}

export interface CloseButtonProps {
  onClick?: () => void;
  variant?: "desktop" | "mobile";
  className?: string;
}

export interface CurrentBidProps {
  amount: number;
  size?: "small" | "large";
  className?: string;
}

export interface DesktopLiveBidProps {
  auctionImg: string;
  currentBid: number;
  tag: string;
  creator: string;
  messages: Array<{
    id: number;
    profileImg: string;
    name: string;
    message: string;
  }>;
  onPlaceBid?: (amount: number) => void;
  onSeeUpcoming?: () => void;
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

export interface LiveBadgeProps {
  size?: "small" | "large";
  className?: string;
}

export interface MobileLiveBidProps {
  auctionImg: string;
  currentBid: number;
  tag: string;
  viewCount: number;
  messages: Array<{
    id: number;
    profileImg: string;
    name: string;
    message: string;
  }>;
  onSendMessage?: (message: string) => void;
}

