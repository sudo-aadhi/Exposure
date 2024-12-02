"use client";
import React, { useEffect, useState } from "react";
import user from "@/public/assets/user.png";
import admin from "@/public/assets/admin.jpg";
import {
  MessageSquareCode,
  CirclePlus,
  Send,
  Paperclip,
  Smile,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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
        <KeyboardComponent />
      </div>
      <div className="flex items-center justify-between w-full h-[342.06px] rounded-[12px]">
        <div className="flex items-center justify-between w-[582px] h-[342.06px] border border-[#1C1C1C] rounded-[12px]"></div>
        <div className="flex items-center justify-between w-[582px] h-[342.06px] border border-[#1C1C1C] rounded-[12px]"></div>
      </div>
    </div>
  );
};

const KeyboardComponent = () => {
  return (
    <div className="flex items-center justify-center w-[460px] h-[200px] rounded-b-[12px] bg-gradient-to-t from-white to-black text-white overflow-hidden">
      <div className="flex flex-col items-center justify-center w-[459px] h-[200px] rounded-b-[12px] bg-black text-white overflow-hidden relative bottom-[0.5px]">
        <div className="flex w-[450px] h-[160px] justify-center">
          <div className="flex flex-col items-center justify-center w-[410px] h-full gap-[6px]">
            <div className="flex justify-center items-center w-[408.5px] h-[17px] bg-gradient-to-t from-[#ffffff10] to-black overflow-hidden rounded-b-[2px]">
              <div className="flex justify-center items-center w-[409px] h-[16px] bg-black relative bottom-[0.5px]  rounded-b-[2px]"></div>
            </div>
            <div className="flex items-center gap-[3px]">
              {Array.from({ length: 14 }).map((item, idx) => {
                return idx < 13 ? (
                  <div className="flex items-center justify-center w-[25px] h-[25px] bg-gradient-to-t from-[#ffffff20] to-black rounded-[3px]">
                    <div className="flex items-center justify-center w-[23.5px] h-[24px] bg-black rounded-[3px] relative bottom-[0.5px]"></div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-[45px] h-[25px] bg-gradient-to-t from-[#ffffff20] to-black rounded-[3px]">
                    <div className="flex items-center justify-center w-[43.5px] h-[24px] bg-black rounded-[3px] relative bottom-[0.5px]"></div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-[3px]">
              {Array.from({ length: 14 }).map((item, idx) => {
                return idx != 0 ? (
                  <div className="flex items-center justify-center w-[25px] h-[25px] bg-gradient-to-t from-[#ffffff40] to-black rounded-[3px]">
                    <div className="flex items-center justify-center w-[23.5px] h-[24px] bg-black rounded-[3px] relative bottom-[0.5px]"></div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-[45px] h-[25px] bg-gradient-to-t from-[#ffffff40] to-black rounded-[3px]">
                    <div className="flex items-center justify-center w-[43.5px] h-[24px] bg-black rounded-[3px] relative bottom-[0.5px]"></div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-[3px]">
              {Array.from({ length: 11 }).map((item, idx) => {
                return idx != 0 ? (
                  <div className="flex items-center justify-center w-[25px] h-[25px] bg-gradient-to-t from-[#ffffff60] to-black rounded-[3px]">
                    <div className="flex items-center justify-center w-[23.5px] h-[24px] bg-black rounded-[3px] relative bottom-[0.5px]"></div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-[61px] h-[25px] bg-gradient-to-t from-[#ffffff60] to-black rounded-[3px]">
                    <div className="flex items-center justify-center w-[59.5px] h-[24px] bg-black rounded-[3px] relative bottom-[0.5px]"></div>
                  </div>
                );
              })}
              <div className="flex items-center justify-center w-[61px] h-[25px] bg-gradient-to-t from-[#ffffff60] to-black rounded-[3px]">
                <div className="flex items-center justify-center w-[59.5px] h-[24px] bg-black rounded-[3px] relative bottom-[0.5px]"></div>
              </div>
            </div>
            <div className="flex items-center gap-[3px]">
              {Array.from({ length: 9 }).map((item, idx) => {
                return idx != 4 ? (
                  <div className="flex items-center justify-center w-[25px] h-[25px] bg-gradient-to-t from-[#fff8] to-black rounded-[3px]">
                    <div className="flex items-center justify-center w-[23.5px] h-[24px] bg-black rounded-[3px] relative bottom-[0.5px]"></div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-[155px] h-[25px] bg-gradient-to-t from-[#fff8] to-black rounded-[3px]">
                    <div className="flex items-center justify-center w-[153.5px] h-[24px] bg-black rounded-[3px] relative bottom-[0.5px]"></div>
                  </div>
                );
              })}
              <div className="flex items-center justify-center w-[25px] h-[25px] bg-gradient-to-t from-[#fff8] to-black rounded-[3px]">
                <div className="flex items-center justify-center w-[23.5px] h-[24px] bg-black rounded-[3px] relative bottom-[0.5px]"></div>
              </div>
            </div>
          </div>
        </div>
        {/* The Touchpad component  */}
        <div className="flex items-center justify-center w-[205px] h-[35px] relative top-[2px] bg-gradient-to-b from-white to-black rounded-t-[2px]">
          <div className="flex w-[204px] h-[34px] bg-black rounded-t-[2px]"></div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrids;
