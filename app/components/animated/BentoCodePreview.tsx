"use client";
import { motion } from "framer-motion";
import React from "react";

const code = [
  '"use client";',
  "",
  "// Importing the necessary libraries: framer-motion for animations, next/image for optimized images, and React for creating components",
  'import { motion } from "framer-motion";',
  'import Image from "next/image";',
  'import React, { useState, useCallback } from "react";',

  "/*",
  "   Importing external libraries:",
  "   - framer-motion: A declarative animation library for creating high-performance motion effects.",
  "   - next/image: Provides optimized image rendering tailored for Next.js applications, ensuring fast load times.",
  "   - react: Core library for building UI components and managing state.",
  "*/",
  "// Defining the types of properties that the Button component accepts as props",
  "// The props include settings for appearance,",
  "// The props include settings for appearance,",
];

const BentoCodePreview = () => {
  return (
    <div className="flex flex-col items-center w-[250px] h-full">
      <div className="flex items-center justify-center w-full h-[20px] bg-gradient-to-r from-[#282828] to-transparent overflow-hidden">
        <div className="flex items-center w-full h-[20px] bg-black relative bottom-[1px] left-[1px]">
          <div className="flex gap-[7px] ml-4">
            <p className="text-[8px] opacity-45">File</p>
            <p className="text-[8px] opacity-40">Edit</p>
            <p className="text-[8px] opacity-30">Selection</p>
            <p className="text-[8px] opacity-20">View</p>
            <p className="text-[8px] opacity-10">Go</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[3px] relative left-[4px] top-[4px] w-full flex-wrap">
        {code.map((item, idx) => {
          // Calculate opacity based on the index
          const opacity = Math.max(0.2, 1 - idx / (code.length + 1)); // Ensures opacity gradually reduces to a minimum value

          return (
            <motion.p
              className="font-inter text-[7px] w-full flex-wrap relative left-[5px] top-[3px] bg-gradient-to-r from-[#686868] to-[#2F2F2F] bg-clip-text text-transparent"
              key={idx}
              initial={{
                filter: "blur(50px)",
                opacity: 0,
              }}
              animate={{
                filter: "blur(0px)",
                opacity: opacity, // Apply opacity based on index
              }}
              transition={{
                duration: 0.5, // Extended for smoother transition
                delay: 0.1 * idx,
                ease: [0.25, 0.1, 0.25, 1], // Custom cubic bezier easing for smoother motion
              }}
            >
              {item}
            </motion.p>
          );
        })}
      </div>
    </div>
  );
};

export default BentoCodePreview;
