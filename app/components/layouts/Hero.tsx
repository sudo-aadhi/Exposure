/**
 * Hero Component
 *
 * A visually striking and animated hero section for a modern web application.
 * Designed to create an engaging first impression with dynamic text animations.
 *
 * Key Features:
 * - Animated title with word-by-word reveal effect
 * - Gradient and glow effects on text for visual appeal
 * - Responsive design adapting to various screen sizes
 * - Smooth fade-in animations for subtitle and CTA button
 *
 * Component Highlights:
 * - Utilizes Framer Motion for precise animation control
 * - Implements advanced CSS techniques for text styling
 * - Optimized for performance with minimal re-renders
 */

"use client"; // Enable client-side rendering for dynamic animations
import React from "react";
import Button from "./Button"; // Import custom Button component
import arrow from "../../../public/assets/right-arrow.svg"; // Import arrow icon for CTA button
import { motion } from "framer-motion"; // Import Framer Motion for animations

const Hero = () => {
  // Define the main title text
  const text = "The Modern Way To Build";
  const words = text.split(" "); // Split title into words for individual animations

  return (
    <div className="flex flex-col items-center text-center font-inter relative top-[60px] h-auto px-4 sm:px-6 md:px-8 lg:px-8">
      {/* Animated Main Title Section */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-[10px] sm:gap-[15px] md:gap-[18px] lg:gap-[20px]"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1], // Custom easing for smooth animation
        }}
      >
        {/* Map through each word and apply individual animations */}
        {words.map((word, idx) => (
          <motion.h1
            key={idx}
            className="bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent text-[40px] sm:text-[55px] md:text-[65px] lg:text-[75px]"
            initial={{
              opacity: 0,
              filter: "blur(25px)",
              y: 35,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              delay: idx * 0.18, // Stagger animation for each word
              duration: 1.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.h1>
        ))}
      </motion.div>

      {/* Secondary Animated Text Section */}
      <div className="flex flex-wrap items-center justify-center gap-[10px] sm:gap-[15px] md:gap-[20px] lg:gap-[23px] relative bottom-[15px] sm:bottom-[20px] md:bottom-[22px] lg:bottom-[25px]">
        {/* "Animated" Text with Gradient Effect */}
        <motion.div className="relative">
          <motion.h1
            className="bg-gradient-to-b from-[#b13ef8] to-[#1E0230] bg-clip-text text-transparent text-[40px] sm:text-[55px] md:text-[65px] lg:text-[75px]"
            initial={{
              opacity: 0,
              y: 35,
              filter: "blur(25px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 0.6,
              duration: 1.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Animated
          </motion.h1>
          {/* Background opacity animation */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{
              delay: 2.4,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            {/* Placeholder for potential background effect */}
          </motion.div>
        </motion.div>

        {/* "Websites" Text with Glow Effect */}
        <motion.div className="relative">
          <motion.h1
            className="text-transparent text-[40px] sm:text-[55px] md:text-[65px] lg:text-[75px] relative"
            style={{
              WebkitTextStroke: "0.7px #C567FF",
              textShadow: "0 0 5px #1E0230, 0 0 40px #1E0230",
              filter: "drop-shadow(0 0 10px #)",
            }}
            initial={{
              opacity: 0,
              y: 20,
              filter:
                "blur(25px) drop-shadow(0 0 10px rgba(255, 72, 14, 0.15))",
            }}
            animate={{
              opacity: 0.65,
              y: 0,
              filter: "blur(0px) drop-shadow(0 0 15px rgba(255, 72, 14, 0.15))",
            }}
            transition={{
              delay: 0.8,
              duration: 1.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Websites
          </motion.h1>
          {/* Background blur animation */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, filter: "blur(25px)" }}
            animate={{ opacity: 0.6, filter: "blur(0px)" }}
            transition={{
              delay: 2.6,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            {/* Placeholder for potential background effect */}
          </motion.div>
        </motion.div>
      </div>

      {/* Subtitle Section with Fade-in Animation */}
      <motion.p
        className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-inter text-[#5d5d5d] w-full sm:w-[80%] md:w-[600px] lg:w-[644px] relative bottom-[10px] sm:bottom-[15px] md:bottom-[18px] lg:bottom-[20px]"
        initial={{ opacity: 0, y: 20, filter: "blur(2px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          delay: 1.8,
          duration: 1.6,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        World's most advanced animated component library, built on top of Next
        JS, React, Tailwind CSS, GSAP, Three JS & Framer Motion.
      </motion.p>

      {/* CTA Button with Fade-in Animation */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2,
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <Button
          backgroundColor="AD28FF"
          toColor="1E0230"
          width={155}
          height={42}
          text="Get started"
          vector={arrow}
          vectorWidth={14}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
