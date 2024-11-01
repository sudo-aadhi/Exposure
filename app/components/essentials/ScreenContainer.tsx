"use client";
import Image from "next/image";
import React from "react";

const ScreenContainer = () => {
  return (
    <div
      className="flex flex-col items-center w-[1092px] h-[669px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10
 z-10 absolute top-[550px] justify-evenly"
    >
      <div className="w-[500px] h-[6px] bg-gradient-to-r from-[#1a2250] via-white to-[#1a2250] opacity-50"></div>
      <div className="flex items-center justify-center w-[1082px] h-[659px] border-border-white rounded-[5px]">
        <Image
          src="https://svgshare.com/i/1C5k.svg"
          alt="Window"
          width={1082}
          height={659}
          draggable="false"
        />
      </div>
      <div className="w-[500px] h-[6px] bg-gradient-to-r from-[#12121F] via-white to-[#12121F] opacity-50"></div>
    </div>
  );
};

export default ScreenContainer;
