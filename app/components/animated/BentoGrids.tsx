"use client";
import React, { useEffect, useState } from "react";
import {
  MessageSquareCode,
  Brain,
  Send,
  CirclePlus,
  Gift,
  ImagePlay,
  Smile,
} from "lucide-react";

const BentoGrids = () => {
  return (
    <div className="flex flex-col items-center relative top-[500px] w-[1204px] h-[695.84px] gap-[40px]">
      <div className="flex flex-col items-center w-auto h-auto">
        <h3 className="text-[20px] font-inter">
          Don't build everything yourself.
        </h3>
        <h3 className="text-[20px] font-inter text-[#6A6B6C]">
          Replicate the code and you're ready to go.
        </h3>
      </div>
      <div className="flex w-full h-[217.78px] border border-[#1C1C1C] rounded-[12px] justify-evenly gap-[200px]">
        <div className="flex flex-col w-[420px] h-[200px] justify-center gap-[10px]">
          <div className="flex items-center gap-[8px]">
            <MessageSquareCode />
            <h2 className="text-[18px] font-thin font-inter">
              Listening to the Crowd
            </h2>
          </div>
          <div className="flex">
            <p className="text-[14px] text-[#9C9C9D] font-inter">
              Tired of endlessly searching for the components you need? Just
              drop us a message in chat — we’re crafting solutions shaped by
              your voice!
            </p>
          </div>
        </div>
        {/* The chatbox component  */}
        <ChatBoxComponent />
      </div>
      <div className="flex items-center justify-between w-full h-[342.06px] rounded-[12px]">
        <div className="flex items-center justify-between w-[582px] h-[342.06px] border border-[#1C1C1C] rounded-[12px]"></div>
        <div className="flex items-center justify-between w-[582px] h-[342.06px] border border-[#1C1C1C] rounded-[12px]"></div>
      </div>
    </div>
  );
};

const ChatBoxComponent = () => {
  const [message, setMessage] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Mark as mounted once the component is rendered on the client
  }, []);

  if (!mounted) {
    return null; // Return nothing until the component has mounted
  }

  const handleSend = () => {
    console.log("Sending message:", message);
    setMessage("");
  };

  return (
    <div className="flex flex-col w-[460px] h-[200px] rounded-b-[12px] border border-[#1C1C1C] bg-black text-white overflow-hidden">
      <div className="flex flex-col flex-grow p-4 space-y-4 overflow-y-auto">
        <div className="flex items-start gap-3">
          <Send size={20} className="mt-1 flex-shrink-0" />
          <h3 className="text-[16px] font-medium">
            Hey, can you create an animated Bento box?
          </h3>
        </div>
        <div className="flex items-start justify-end gap-3">
          <h3 className="text-[16px] text-[#9C9C9D] text-right">
            Of course! We'd be happy to create it for you!
          </h3>
          <Brain size={20} color="#6A6B6C" className="mt-1 flex-shrink-0" />
        </div>
      </div>
      <div className="flex items-center justify-between border-[#1C1C1C] w-[413px] h-[35px] border ml-5 mb-5 rounded-[6px]">
        <div className="flex items-center gap-[10px] ml-3">
          <CirclePlus size={18} />
          <p className="text-[#9C9C9D] text-[15px]">Message #request</p>
        </div>
        <div className="flex items-center gap-[5px] mr-3">
          <Gift size={18} />
          <ImagePlay size={18} />
          <Smile size={18} />
        </div>
      </div>
    </div>
  );
};

export default BentoGrids;
