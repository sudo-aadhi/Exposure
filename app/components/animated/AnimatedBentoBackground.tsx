/**
 * AnimatedBentoBackground Component
 *
 * A visually striking animated background featuring meteor beams.
 * Designed to create a futuristic, immersive aesthetic for modern UIs.
 *
 * Key Features:
 * - Generates multiple meteor beams with random positions to create a dynamic background.
 * - Utilizes `GradientOverlayBackground` component to handle the individual beam rendering.
 * - Easy to integrate with other components, with a clean layout for responsive designs.
 *
 * Component Highlights:
 * - Fully responsive, ensuring an adaptable design to different screen sizes.
 * - Performance-optimized by rendering a set number of meteor beams using `Array.from`.
 * - Uses Tailwind CSS classes for styling, ensuring fast and efficient design handling.
 */
"use client";
import React from "react"; // React import for functional components

/**
 * AnimatedBentoBackground Component
 *
 * Renders an animated background composed of multiple meteor beams.
 * Each meteor beam is generated within a container and animated.
 * The layout ensures that the animated background covers the entire container.
 * A set number of meteor beams are dynamically rendered to avoid unnecessary performance overhead.
 */
const AnimatedBentoBackground = () => {
  return (
    // Container for the animated background, with flexible width and height
    // Using flexbox to center and control layout of meteor beams within the parent container
    <div className="flex items-center justify-center w-full h-[315px] overflow-hidden relative">
      {/* Rendering a fixed number (9) of meteor beams to create the background animation */}
      {Array.from({ length: 9 }).map((item, idx) => (
        <GradientOverlayBackground
          width={133.33} // Fixed width for each meteor beam
          key={idx} // Unique key for each meteor beam
        />
      ))}
      {/* Adding the centered text as a child */}
      <div className="flex flex-col items-center gap-[10px] absolute">
        {/* The text can be added here */}
      </div>
    </div>
  );
};

interface MeteorBeamsProps {
  width: number; // Width of the meteor beam
}

/**
 * GradientOverlayBackground Component
 *
 * Renders individual meteor beams with dynamic animation.
 * Each beam has a gradient background to simulate meteor effects.
 * The beams are designed to create a dynamic, immersive meteor shower effect.
 * The `backgroundBlendMode` property is used to control how the gradient layers interact visually.
 */
const GradientOverlayBackground: React.FC<MeteorBeamsProps> = ({
  width = 150, // Default width if none is provided
}) => {
  return (
    // Flex container for each meteor beam, ensuring proper alignment and styling
    // Ensures that each meteor beam is positioned relative to its parent and stretched to fill the container
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
          backgroundBlendMode: "overlay", // Blend mode for visual effect, creating layered meteor effect
        }}
      ></div>
    </div>
  );
};

export default AnimatedBentoBackground; // Exporting the component for use in other parts of the application
