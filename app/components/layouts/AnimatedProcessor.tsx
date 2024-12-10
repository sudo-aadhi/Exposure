"use client";

import { motion } from "framer-motion";
import React from "react";

const AnimatedProcessor = () => {
  return (
    <div className="relative flex items-center justify-center w-[625px] h-[415px] bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-[#1b1b1b] overflow-hidden">
      <div className="flex items-center justify-center gap-[20px]"></div>
      <motion.div
        className="absolute w-32 h-40"
        animate={{
          rotate: 360,
          opacity: [10, 50, 10],
        }}
        transition={{
          ease: "linear",
          duration: 10,
          repeat: Infinity,
        }}
      >
        <div className="absolute top-0 left-1/2 w-[70px] h-[500px] bg-gradient-to-l from-black to-[#1a89ff] rounded-full transform -translate-x-1/2" />
      </motion.div>
      <div className="relative flex items-center justify-center w-[622px] h-[412px] bg-black bg-clip-padding backdrop-filter backdrop-blur-sm overflow-hidden z-10"></div>
    </div>
  );
};

export default AnimatedProcessor;
