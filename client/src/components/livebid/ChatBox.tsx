import React from "react";
import ChatMessage from "./ChatMessage";
import type { ChatBoxProps } from "@/data/types/livebid.model";

const ChatBox: React.FC<ChatBoxProps> = ({ 
  messages, 
  variant = "desktop",
  className = "" 
}) => {
  const containerClasses = variant === "desktop"
    ? "h-155.75 bg-transparent -ml-3 rounded-[25px] p-4 overflow-y-auto mb-2 flex flex-col gap-4 no-scrollbar"
    : "w-[80%] max-h-62.5 overflow-y-auto flex flex-col gap-1 no-scrollbar";

  return (
    <div className={`${containerClasses} ${className}`}>
      {messages.map((msg) => (
        <ChatMessage
          key={msg.id}
          profileImg={msg.profileImg}
          name={msg.name}
          message={msg.message}
        />
      ))}
    </div>
  );
};

export default ChatBox;