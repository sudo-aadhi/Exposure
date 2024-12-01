"use client";
import { motion } from "framer-motion";
import React from "react";

interface AnimatedTextBlurProp {
  text: string;
  position: number;
}

const AnimatedTextBlur: React.FC<AnimatedTextBlurProp> = ({
  text = "",
  position,
}) => {
  return (
    <div
      className="flex absolute gap-[20px]"
      style={{
        top: `${position}px`,
      }}
    >
      {text.split(" ").map((letter, index) => {
        return (
          <motion.span
            className="flex items-center justify-center gap-[2px]"
            key={index}
            initial={{
              opacity: 0,
              filter: "blur(15px)",
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              delay: index * 0.1,
              ease: "easeInOut",
            }}
          >
            <h1 className="bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent text-[75px]">
              {letter}
            </h1>
          </motion.span>
        );
      })}
    </div>
  );
};

export default AnimatedTextBlur;
