import React from "react";

interface ChatMessageProps {
  profileImg: string;
  name: string;
  message: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ profileImg, name, message }) => (
  <div className="flex items-center gap-4 mb-3 md:mb-5">
    <div className="w-8 h-8 md:w-[70px] md:h-[70px] rounded-full overflow-hidden border border-[#C056097D] flex items-center justify-center bg-white">
      <img
        src={profileImg}
        alt={`${name} Profile`}
        className="w-full h-full object-cover"
      />
    </div>
<div className="flex flex-col gap-2">
 <span className="chat-text text-[13px] md:text-[22px] satoshi">
  {name}
</span>
<span className="chat-text text-[13px] md:text-[22px] satoshi-bold inline-block">
  {message}
</span>
</div>
  </div>
);

export default ChatMessage;