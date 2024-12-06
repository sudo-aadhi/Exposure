"use client";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";

const BentoBadge = ({
  text,
  children,
  hover,
}: {
  text?: string;
  children?: React.ReactNode;
  hover: boolean;
}) => {
  return (
    <div className="flex items-center justify-center w-[100px] h-[35px] rounded-full bg-gradient-to-br from-[#8f8887] to-black overflow-hidden">
      {/* Here goes the icon and the step container */}
      <div className="flex items-center justify-center w-[97px] h-[32px] rounded-full bg-black shadow-md gap-[5px] overflow-hidden relative">
        {children}
        <h3 className="font-inter text-[15px] bg-gradient-to-r from-[#ababab] to-[#ffffff2d] bg-clip-text text-transparent">
          {text}
        </h3>
        {hover && (
          <motion.div
            className="flex w-[8px] h-[45px] absolute bg-white opacity-20"
            initial={{ x: -100, rotate: "25deg" }}
            animate={{ x: 250, rotate: "25deg" }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          ></motion.div>
        )}
      </div>
    </div>
  );
};

export default BentoBadge;
