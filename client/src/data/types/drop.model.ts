export interface CountdownTimerProps {
  targetDate: string | Date; 
  onExpire?: () => void;
}

export interface DropCardProps {
  image: string;
  auctionStartTime: string | Date; 
  auctionDurationHours?: number; 
  title: string;
  description: string;
  creator: string;
}

export type DropStatus = "UPCOMING" | "LIVE NOW" | "ENDED";

export interface DropCardDetailsProps {
  status: "UPCOMING" | "LIVE NOW" | "ENDED";
  date: string;
  title: string;
  description: string;
  creator: string;
  action?: string;
  getStatusColor: (status: "UPCOMING" | "LIVE NOW" | "ENDED") => string;
}

export interface DropCardImageProps {
  image: string;
  title: string;
  status: "UPCOMING" | "LIVE NOW" | "ENDED";
  endedTime?: string;
  targetDate?: string | Date;
  getStatusColor: (status: "UPCOMING" | "LIVE NOW" | "ENDED") => string;
  getActionButtonStyle: (status: "UPCOMING" | "LIVE NOW" | "ENDED") => string;
  getActionButtonText: (status: "UPCOMING" | "LIVE NOW" | "ENDED") => string;
}