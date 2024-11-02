"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

/**
 * ScreenContainer: Renders a stylized container mimicking a screen or window.
 *
 * This component creates a visually appealing container with a blurred background,
 * gradient borders, and a centered image. It's designed to be positioned absolutely
 * within its parent container.
 *
 * @returns {JSX.Element} The rendered ScreenContainer component
 */
const ScreenContainer: React.FC = () => {
  // Dimensions for the container and image
  const containerDims = { width: 1092, height: 669 };
  const imageDims = { width: 1082, height: 659 };

  // Gradient colors for top and bottom borders
  const gradientColors = {
    top: { from: "#1a2250", to: "#1a2250" },
    bottom: { from: "#12121F", to: "#12121F" },
  };

  return (
    <motion.div
      className={`
        flex flex-col items-center justify-evenly
        w-[${containerDims.width}px] h-[${containerDims.height}px]
        bg-gray-400 rounded-md bg-clip-padding
        backdrop-filter backdrop-blur-2xl bg-opacity-10
        z-10 absolute top-[550px]
      `}
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
    >
      {/* Top border with gradient */}
      <div
        className={`
        w-[500px] h-[6px]
        bg-gradient-to-r from-[${gradientColors.top.from}] via-white to-[${gradientColors.top.to}]
        opacity-50
      `}
      ></div>

      {/* Main content area with image */}
      <div
        className={`
        flex items-center justify-center
        w-[${imageDims.width}px] h-[${imageDims.height}px]
        border-border-white rounded-[5px]
      `}
      >
        <Image
          src="https://svgshare.com/i/1C5k.svg"
          alt="Window"
          width={imageDims.width}
          height={imageDims.height}
          draggable={false}
        />
      </div>

      {/* Bottom border with gradient */}
      <div
        className={`
        w-[500px] h-[6px]
        bg-gradient-to-r from-[${gradientColors.bottom.from}] via-white to-[${gradientColors.bottom.to}]
        opacity-50
      `}
      ></div>
    </motion.div>
  );
};

export default ScreenContainer;
