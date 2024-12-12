/**
 * FallingMeteorsBackground Component
 *
 * A visually dynamic background animation featuring falling meteor lines.
 * Designed to create an engaging and immersive aesthetic for modern UIs.
 *
 * Key Features:
 * - Combination of static and animated meteor lines for a layered visual effect.
 * - Randomized animations to maintain visual interest and unpredictability.
 * - Performance-optimized with `React.memo`, `useMemo`, and `useCallback`.
 *
 * Component Highlights:
 * - Responsive, fluid design adaptable to various container dimensions.
 * - Utilizes Framer Motion for precise animation control and fluidity.
 * - Lightweight implementation designed for high performance.
 */

"use client"; // Ensure this component is rendered client-side
import { motion } from "framer-motion";
import React, { useState, useEffect, useMemo, useCallback } from "react";

const FallingMeteorsBackground: React.FC = React.memo(() => {
  /**
   * State to manage which meteor lines are animated.
   * Stores indices of the lines to be animated.
   */
  const [animatedLines, setAnimatedLines] = useState<Set<number>>(new Set());

  // Generate a random set of lines to animate on component mount
  useEffect(() => {
    const numberOfLines = Math.floor(Math.random() * 4) + 2; // Randomize between 2 to 5 animated lines
    const selectedLines = new Set<number>();
    while (selectedLines.size < numberOfLines) {
      selectedLines.add(Math.floor(Math.random() * 17)); // Select random indices from 0 to 16
    }
    setAnimatedLines(selectedLines); // Store the selected indices
  }, []);

  /**
   * Generates static meteor lines (non-animated) with a given rotation.
   * Cached using `useMemo` for performance optimization.
   */
  const createStaticLines = useMemo(() => {
    const createLines = (rotation: number) => (
      <div
        className={`flex items-center justify-center w-[442px] h-[480px] gap-[15px] ${
          rotation > 0 ? "ml-[-15px]" : "mr-[-15px]"
        }`}
      >
        {Array.from({ length: 17 }).map((_, idx) => (
          <div
            key={idx}
            className={`flex w-[2px] h-full bg-gradient-to-t from-[#ff3c00] via-[#ff3c001d] to-[#000000] rotate-[-45deg]`}
          ></div>
        ))}
      </div>
    );
    return createLines;
  }, []);

  /**
   * Generates animated meteor lines.
   * Uses `useCallback` to ensure stable references across renders.
   */
  const createAnimatedLines = useCallback(
    () => (
      <div className="flex items-center justify-center w-[442px] h-[480px] gap-[15px] ml-[-15px]">
        {Array.from({ length: 17 }).map((_, idx) => (
          <div
            key={idx}
            className="relative flex w-[2px] h-full bg-gradient-to-t from-[#ff3c00ac] via-[#ff3c001d] to-[#000000] rotate-[45deg] overflow-hidden"
          >
            {animatedLines.has(idx) && (
              <motion.div
                className="absolute top-0 flex flex-col items-center"
                initial={{ y: -100, opacity: 0 }} // Start off-screen and invisible
                animate={{ y: 580, opacity: [0, 1, 1, 0] }} // Animate down with fade-in/out
                transition={{
                  duration: 1.5 + Math.random(), // Randomize animation duration
                  repeat: Infinity, // Loop animation infinitely
                  repeatDelay: Math.random() * 4, // Random delay between repeats
                  ease: "linear", // Smooth, constant motion
                }}
              >
                <div className="w-[5px] h-[px] rounded-full bg-[#ff3c00]" />
                <div className="w-[5px] h-[97.49px] bg-gradient-to-t from-[#ff3c00] to-[#000000]" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    ),
    [animatedLines]
  );

  return (
    <motion.div
      className="flex items-center justify-center w-[903px] h-[426px] overflow-hidden absolute top-[200px]"
      initial={{
        opacity: 0, // Fade-in effect
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 3, // Fade-in duration
        ease: "easeInOut", // Smooth easing for fade-in
        delay: 3, // Delayed fade-in for sequencing with other components
      }}
    >
      {createStaticLines(-45)} {/* Render static lines */}
      {createAnimatedLines()} {/* Render animated lines */}
    </motion.div>
  );
});

FallingMeteorsBackground.displayName = "FallingMeteorsBackground";

export default FallingMeteorsBackground;
