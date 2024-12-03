"use client";
import React, { useCallback, useState } from "react";
import { MessageSquareCode } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import MacBookKeyboard from "./MacBookKeyboard";

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
      <div className="flex w-full h-[217.78px] border border-[#1C1C1C] rounded-[12px] justify-evenly gap-[200px] overflow-hidden">
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
        <MacBookKeyboard />
      </div>
      <div className="flex items-center justify-between w-full h-[342.06px] rounded-[12px]">
        <div className="flex items-center justify-between w-[582px] h-[342.06px] border border-[#1C1C1C] rounded-[12px]"></div>
        <div className="flex items-center justify-between w-[582px] h-[342.06px] border border-[#1C1C1C] rounded-[12px]"></div>
      </div>
    </div>
  );
};

export default BentoGrids;
