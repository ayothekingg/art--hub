import React, { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import type { ChatInputProps } from "@/data/types/livebid.model";

const ChatInput: React.FC<ChatInputProps> = ({ 
  onSend, 
  placeholder = "Join Conversation...",
  className = "" 
}) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() && onSend) {
      onSend(message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className={`w-75.5 h-12.5 flex items-center px-4 bg-transparent rounded-[30px] border border-white ${className}`}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-[15px] text-white placeholder:text-white"
      />
      <button type="button" className="ml-3" onClick={handleSend}>
        <RiSendPlaneFill className="text-[28px] text-white" />
      </button>
    </div>
  );
};

export default ChatInput;