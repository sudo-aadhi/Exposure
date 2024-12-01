"use client"; // Marking this component to be client-side rendered since it uses dynamic animation

import React from "react";
import Button from "./Button"; // Importing the reusable Button component
import arrow from "../../../public/assets/right-arrow.svg"; // Arrow image for the button icon
import { motion } from "framer-motion"; // Importing motion for animations

const Hero = () => {
  const text = "The Modern Way To Build"; // Defining the hero title text
  const words = text.split(" "); // Splitting the title into individual words for dynamic animation

  return (
    <div className="flex flex-col items-center text-center font-inter relative top-[60px] h-auto px-4 sm:px-6 md:px-8 lg:px-8">
      {/* Main animated title with ultra-smooth transitions */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-[10px] sm:gap-[15px] md:gap-[18px] lg:gap-[20px]"
        initial={{ y: 30, opacity: 0 }} // Initial state before animation
        animate={{ y: 0, opacity: 1 }} // Final state after animation
        transition={{
          duration: 1.8, // Duration for the transition
          ease: [0.22, 1, 0.36, 1], // Custom easing function for smoothness
        }}
      >
        {words.map((word, idx) => (
          <motion.h1
            key={idx}
            className="bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent text-[40px] sm:text-[55px] md:text-[65px] lg:text-[75px]"
            initial={{
              opacity: 0, // Start invisible
              filter: "blur(25px)", // Start with a blur
              y: 35, // Start with a slight vertical offset
            }}
            animate={{
              opacity: 1, // Fade in
              filter: "blur(0px)", // Remove blur
              y: 0, // Move to original position
            }}
            transition={{
              delay: idx * 0.18, // Stagger animation based on index
              duration: 1.6, // Duration of the animation
              ease: [0.16, 1, 0.3, 1], // Custom easing for each word
            }}
          >
            {word} {/* Dynamically displaying each word */}
          </motion.h1>
        ))}
      </motion.div>

      {/* Secondary text with enhanced fluid animations */}
      <div className="flex flex-wrap items-center justify-center gap-[10px] sm:gap-[15px] md:gap-[20px] lg:gap-[23px] relative bottom-[15px] sm:bottom-[20px] md:bottom-[22px] lg:bottom-[25px]">
        <motion.div className="relative">
          <motion.h1
            className="bg-gradient-to-b from-[#FF3D00] to-[#330C00] bg-clip-text text-transparent text-[40px] sm:text-[55px] md:text-[65px] lg:text-[75px]"
            initial={{
              opacity: 0, // Start invisible
              y: 35, // Start with a slight vertical offset
              filter: "blur(25px)", // Start with a blur
            }}
            animate={{
              opacity: 1, // Fade in
              y: 0, // Move to original position
              filter: "blur(0px)", // Remove blur
            }}
            transition={{
              delay: 0.6, // Delay the animation slightly for a staggered effect
              duration: 1.8, // Duration of the animation
              ease: [0.16, 1, 0.3, 1], // Custom easing for smooth movement
            }}
          >
            Animated {/* Subtitle showing the core feature */}
          </motion.h1>
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{
              delay: 2.4, // Delay the background opacity change
              duration: 0.6, // Duration of the transition
              ease: "easeOut", // Easing function for smooth fading
            }}
          >
            {/* Placeholder for a blurred background (commented out) */}
          </motion.div>
        </motion.div>

        <motion.div className="relative">
          <motion.h1
            className="text-transparent text-[40px] sm:text-[55px] md:text-[65px] lg:text-[75px] relative"
            style={{
              WebkitTextStroke: "0.7px #FF480E", // Text stroke effect
              textShadow:
                "0 0 20px rgba(255, 72, 14, 0.3), 0 0 40px rgba(255, 72, 14, 0.2)", // Glow effect
              filter: "drop-shadow(0 0 10px rgba(255, 72, 14, 0.15))", // Drop shadow for depth
            }}
            initial={{
              opacity: 0, // Start invisible
              y: 20, // Start with a slight vertical offset
              filter:
                "blur(25px) drop-shadow(0 0 10px rgba(255, 72, 14, 0.15))", // Initial blur and shadow
            }}
            animate={{
              opacity: 0.65, // Fade in partially
              y: 0, // Move to original position
              filter: "blur(0px) drop-shadow(0 0 15px rgba(255, 72, 14, 0.15))", // Clear blur and add stronger shadow
            }}
            transition={{
              delay: 0.8, // Delay for staggered effect
              duration: 1.8, // Duration of the animation
              ease: [0.16, 1, 0.3, 1], // Custom easing for smooth transition
            }}
          >
            Websites {/* Subtitle related to the services provided */}
          </motion.h1>
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, filter: "blur(25px)" }}
            animate={{ opacity: 0.6, filter: "blur(0px)" }}
            transition={{
              delay: 2.6, // Slight delay before applying the transition
              duration: 0.6, // Duration of the transition
              ease: "easeOut", // Easing for smooth fading effect
            }}
          >
            {/* Placeholder for a blurred background (commented out) */}
          </motion.div>
        </motion.div>
      </div>

      {/* Subtitle with enhanced fade-up animation */}
      <motion.p
        className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-inter text-[#5d5d5d] w-full sm:w-[80%] md:w-[600px] lg:w-[644px] relative bottom-[10px] sm:bottom-[15px] md:bottom-[18px] lg:bottom-[20px]"
        initial={{ opacity: 0, y: 20, filter: "blur(2px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          delay: 1.8, // Delay for smooth sequencing
          duration: 1.6, // Duration of the fade-up animation
          ease: [0.16, 1, 0.3, 1], // Custom easing for smoothness
        }}
      >
        World's most advanced animated component library, built on top of Next
        JS, React, Tailwind CSS, GSAP, Three JS & Framer Motion.{" "}
        {/* A brief description of the tech stack */}
      </motion.p>

      {/* Button with refined fade-up animation */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2, // Delay the appearance of the button
          duration: 1.4, // Duration of the button fade-in
          ease: [0.16, 1, 0.3, 1], // Custom easing for smoothness
        }}
      >
        <Button
          backgroundColor="FE4004" // Button background color
          toColor="EA6D49" // Button hover color
          width={155} // Button width
          height={42} // Button height
          text="Get started" // Button text
          vector={arrow} // Arrow icon for the button
          vectorWidth={14} // Arrow icon size
        />
      </motion.div>
    </div>
  );
};

export default Hero;
