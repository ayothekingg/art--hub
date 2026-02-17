import React, { useState, useEffect } from "react";
import DropCardImage from "./DropCardImage";
import DropCardDetails from "./DropCardDetails";
import type { DropStatus, DropCardProps } from "@/data/types/drop.model";

const getStatusColor = (status: DropStatus) => {
  const colors = {
    UPCOMING: "bg-[#4693ED]",
    "LIVE NOW": "bg-[#27AE60]",
    ENDED: "bg-[#BDBDBD]",
  };
  return colors[status] || "bg-[#4693ED]";
};

const getActionButtonStyle = (status: DropStatus) => {
  return status === "ENDED" ? "bg-[#BDBDBD]" : "bg-[#4693ED]";
};

const getActionButtonText = (status: DropStatus) => {
  return status === "ENDED" ? "View" : "Join";
};

// Get the action link text based on status
const getActionText = (status: DropStatus): string => {
  const actions = {
    UPCOMING: "Get Notified",
    "LIVE NOW": "Join Now",
    ENDED: "View Results",
  };
  return actions[status];
};

// Calculate how long ago the auction ended
const getTimeAgo = (endTime: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - endTime.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 0) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  if (diffHours > 0) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
  if (diffMins > 0) return `${diffMins} minute${diffMins > 1 ? "s" : ""} ago`;
  return "Just now";
};

// Format date with time (e.g., "Feb 11, 2026 at 1:00 PM")
const formatDateWithTime = (date: Date): string => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  
  const datePart = date.toLocaleString("en-US", dateOptions);
  const timePart = date.toLocaleString("en-US", timeOptions);
  
  return `${datePart} at ${timePart}`;
};

// Determine the status and relevant times
const calculateAuctionState = (
  startTime: Date,
  durationHours: number
): {
  status: DropStatus;
  targetDate?: Date;
  endedTime?: string;
} => {
  const now = new Date();
  const endTime = new Date(startTime.getTime() + durationHours * 60 * 60 * 1000);

  // Auction hasn't started yet
  if (now < startTime) {
    return {
      status: "UPCOMING",
      targetDate: startTime, // Countdown to start time
    };
  }

  // Auction is currently running
  if (now >= startTime && now < endTime) {
    return {
      status: "LIVE NOW",
      targetDate: endTime, // Countdown to end time
    };
  }

  // Auction has ended
  return {
    status: "ENDED",
    endedTime: getTimeAgo(endTime),
  };
};

const DropCard: React.FC<DropCardProps> = ({
  image,
  auctionStartTime,
  auctionDurationHours = 1, // Default 1 hour
  title,
  description,
  creator,
}) => {
  const startTime = new Date(auctionStartTime);
  
  // State to force re-render when status changes
  const [, setCurrentTime] = useState(new Date());
  
  // Update current time every second to recalculate status
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second
    
    return () => clearInterval(interval);
  }, []);
  
  const { status, targetDate, endedTime } = calculateAuctionState(
    startTime,
    auctionDurationHours
  );

  // Format the date with time
  const formattedDate = formatDateWithTime(startTime);
  
  // Get dynamic action text based on status
  const actionText = getActionText(status);

  return (
    <div className="flex flex-col md:flex-row items-start ml-2.5 md:ml-30 mb-10 md:mb-30">
      <DropCardImage
        image={image}
        title={title}
        status={status}
        endedTime={endedTime}
        targetDate={targetDate}
        getStatusColor={getStatusColor}
        getActionButtonStyle={getActionButtonStyle}
        getActionButtonText={getActionButtonText}
      />

      <DropCardDetails
        status={status}
        date={formattedDate}
        title={title}
        description={description}
        creator={creator}
        action={actionText}
        getStatusColor={getStatusColor}
      />
    </div>
  );
};

export default DropCard;