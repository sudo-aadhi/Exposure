/**
 * HeroDisplay Component
 *
 * A visually striking hero section featuring a dynamic background with animation effects.
 * This component utilizes Next.js Image optimization and Framer Motion for smooth animations.
 *
 * Key Features:
 * - Animated entrance effect using Framer Motion
 * - Glassmorphism effect with backdrop filter for modern UI aesthetics
 * - Custom glow effect using absolute positioning and box-shadow
 * - Optimized image loading with Next.js Image component
 *
 * Component Highlights:
 * - Responsive design with precise pixel measurements for layout consistency
 * - Utilizes client-side rendering to ensure proper functionality of animations
 * - Implements advanced CSS techniques for visual effects
 */

"use client"; // Marking this component for client-side rendering to ensure that animations work correctly

import Image from "next/image"; // Importing the Image component from Next.js for optimized image handling
import React from "react"; // Importing React for JSX rendering
import heroBackground from "../../../public/assets/hero-background.png"; // Importing the background image
import { motion } from "framer-motion"; // Importing motion from Framer Motion to enable animations

const HeroDisplay = () => {
  return (
    <motion.div
      className="flex items-center justify-center w-[1203px] h-[780px] bg-gray-50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#303030] rounded-[14px] relative top-[100px] shadow-2xl"
      initial={{
        opacity: 0, // Initial state for opacity: completely transparent
        y: 25, // Initial vertical position: slightly below its final position
      }}
      animate={{
        opacity: 1, // Final state: fully opaque
        y: 0, // Move to original vertical position
      }}
      transition={{
        duration: 1, // Animation lasts for 1 second
        delay: 1.6, // Starts the animation with a 1.6-second delay for sequencing
        ease: "easeInOut", // Smooth easing function for the animation
      }}
    >
      {/* Glow effect container */}
      <div
        className="top-[95px] opacity-50 rounded-[50px]"
        style={{
          width: "850px",
          height: "630px",
          backgroundColor: "#DCA91F",
          position: "absolute",
          boxShadow: "0 0 1000px 50px #F35D21",
        }}
      ></div>
      {/* Main container for the hero display */}
      <div className="flex items-center w-[1175px] h-[758px] bg-[#000000] bg-clip-padding backdrop-filter backdrop-blur-sm border border-[#303030] rounded-[13px]">
        {/* Background image container with optimized rendering */}
        <Image
          src={heroBackground} // Source of the background image
          alt="hero-background" // Accessibility text for the image
          width={1175} // The width of the image
          height={400} // The height of the image
          draggable="false" // Disabling dragging of the image for better UX
          className="relative bottom-[178px]" // Adjusting the position of the image slightly to align with the container
        />
      </div>
    </motion.div>
  );
};

export default HeroDisplay;
