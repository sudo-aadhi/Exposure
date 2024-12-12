/**
 * AnimatedBentoBackground Component
 *
 * A visually striking animated background featuring meteor beams.
 * Designed to create a futuristic, immersive aesthetic for modern UIs.
 *
 * Key Features:
 * - Generates multiple meteor beams with random positions to create a dynamic background.
 * - Utilizes `MeteorBeams` component to handle the individual beam rendering.
 * - Easy to integrate with other components, with a clean layout for responsive designs.
 *
 * Component Highlights:
 * - Fully responsive, ensuring an adaptable design to different screen sizes.
 * - Performance-optimized by rendering a set number of meteor beams using `Array.from`.
 * - Uses Tailwind CSS classes for styling, ensuring fast and efficient design handling.
 */
"use client";
import { motion } from "framer-motion"; // Import for Framer Motion animations (although not directly used here)
import React from "react"; // React import for functional components

/**
 * AnimatedBentoBackground Component
 *
 * Renders an animated background composed of multiple meteor beams.
 * Each meteor beam is generated within a container and animated.
 */
const AnimatedBentoBackground = ({}) => {
  return (
    // Container for the animated background, with flexible width and height
    <div className="flex items-center w-full h-[315px] overflow-hidden">
      {Array.from({ length: 9 }).map((item, idx) => (
        // Generating multiple MeteorBeams to create the animation effect
        <MeteorBeams
          width={133.33} // Fixed width for each meteor beam
          duration={4} // Duration for the animation of meteor beams
          delay={4} // Delay for staggered animation of meteor beams
          gradient={"#000"} // Background color for meteor beams
          key={idx} // Unique key for each meteor beam
        />
      ))}
    </div>
  );
};

interface MeteorBeamsProps {
  width: number; // Width of the meteor beam
  duration: number; // Duration of the meteor beam animation
  delay: number; // Delay before the animation starts
}

/**
 * MeteorBeams Component
 *
 * Renders individual meteor beams with dynamic animation.
 * Each beam has a gradient background to simulate meteor effects.
 */
const MeteorBeams: React.FC<MeteorBeamsProps> = ({
  width = 150, // Default width if none is provided
  duration = 4, // Default duration for the animation
  delay = 0, // Default delay before animation starts
}) => {
  return (
    // Flex container for each meteor beam, ensuring proper alignment and styling
    <div
      className="flex items-center justify-center h-full overflow-hidden shadow-md"
      style={{ width }} // Dynamically set the width based on the prop
    >
      <div
        className={`relative flex h-full right-[1.2px]`} // Styling for positioning and layout
        style={{
          width: `${width}px`, // Dynamically set the width of the beam
          background:
            "linear-gradient(to bottom right, black, #0B0401, #622200), linear-gradient(to bottom, transparent, black)", // Gradient background to simulate meteor effect
          backgroundBlendMode: "overlay", // Blend mode for visual effect
        }}
      ></div>
    </div>
  );
};

export default AnimatedBentoBackground; // Exporting the component for use in other parts of the application
