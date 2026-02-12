import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import type { CloseButtonProps } from "@/data/types/livebid.model";

const CloseButton: React.FC<CloseButtonProps> = ({ 
  onClick, 
  variant = "desktop",
  className = "" 
}) => {
  if (variant === "mobile") {
    return (
      <button
        className={`text-white text-2xl ${className}`}
        onClick={onClick}
        aria-label="Close"
      >
        <AiOutlineClose />
      </button>
    );
  }

  return (
    <button
      className={`w-12.5 h-12.5 bg-white/20 dark:bg-[#232323] rounded-full flex items-center justify-center shadow cursor-pointer ${className}`}
      aria-label="Close"
      type="button"
      onClick={onClick}
    >
      <AiOutlineClose className="text-3xl text-white dark:text-white" />
    </button>
  );
};

export default CloseButton;