"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useCallback } from "react";

/**
 * Button component that supports gradient backgrounds, hover animations, and optional vector icons.
 * Optimized for client-side rendering with Next.js.
 */

interface ButtonProps {
  backgroundColor: string; // Gradient start color
  toColor: string; // Gradient end color
  width: number; // Button width in pixels
  height: number; // Button height in pixels (default: 42)
  text: string; // Button label text
  vector: string; // Optional vector image source
  vectorWidth: number; // Width of the vector image
}

const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  toColor,
  width,
  height = 42,
  text,
  vector,
  vectorWidth,
}) => {
  // Tracks hover state for the button
  const [isHovered, setIsHovered] = useState(false);

  // Handlers to update hover state efficiently
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 1.7 }}
      className="flex items-center justify-center bg-gradient-to-b from-[#E9E3E3] to-[#000000] cursor-pointer overflow-hidden"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: "10px",
        position: "relative",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          width: `${width - 2}px`,
          height: `${height - 2}px`,
          background: `linear-gradient(to bottom, #${backgroundColor}, #${toColor})`,
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
        className="relative"
      >
        <span className="flex items-center justify-center gap-[7px]">
          <p style={{ opacity: 0.8, fontSize: "18px" }} className="font-thin">
            {text}
          </p>
          {vector && (
            <motion.span
              className="flex items-center justify-center"
              animate={{ x: isHovered ? 3 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={vector}
                width={vectorWidth}
                height={100}
                alt="button-vector"
                draggable="false"
              />
            </motion.span>
          )}
        </span>

        {isHovered && (
          <motion.div
            className="absolute w-[10px] bg-white rotate-[24deg] shimmer-effect"
            style={{ height: `${height + 5}px` }}
            initial={{ x: -80, opacity: 0, rotate: "24deg" }}
            animate={{ x: 110, opacity: [0.17, 0], rotate: "24deg" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default Button;
