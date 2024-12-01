// 'use client' indicates that this component is a client-side React component, compatible with Next.js features
"use client";

// Importing the necessary libraries: framer-motion for animations, next/image for optimized images, and React for creating components
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useCallback } from "react";

// Defining the types of properties that the Button component accepts as props
// The props include settings for appearance, size, text content, and an optional vector icon.
interface ButtonProps {
  backgroundColor: string; // The starting color for the gradient on the button
  toColor: string; // The ending color for the gradient on the button
  width: number; // The width of the button
  height: number; // The height of the button, with a default value
  text: string; // The label text for the button
  vector: string; // Image source URL for an optional vector icon
  vectorWidth: number; // The width of the optional vector icon
}

// Defining the Button functional component, accepting props of the ButtonProps type
const Button: React.FC<ButtonProps> = ({
  backgroundColor, // Accepts the gradient's starting color
  toColor, // Accepts the gradient's ending color
  width, // Button width
  height = 42, // Button height with a default of 42px
  text, // The label to display on the button
  vector, // Optional vector image source
  vectorWidth, // Width for the vector image
}) => {
  // State hook to track whether the button is hovered or not
  const [isHovered, setIsHovered] = useState(false);

  // Using useCallback to optimize performance and prevent re-creation of the function on every render
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true); // Set hover state to true when the button is hovered
  }, []);

  // Function to handle mouse leaving the button, which resets the hover state
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false); // Reset hover state when the mouse leaves
  }, []);

  return (
    // Main container of the button, with motion animation applied for opacity change
    <motion.div
      initial={{ opacity: 0 }} // Button starts with opacity 0
      animate={{ opacity: 1 }} // Button becomes fully visible when rendered
      transition={{
        duration: 1.5, // Smooth transition duration for the opacity effect
        ease: "easeInOut", // Easing function for smooth transition
        delay: 1.7, // Delays the appearance of the button slightly
      }}
      className="flex items-center justify-center bg-gradient-to-b from-[#E9E3E3] to-[#000000] cursor-pointer overflow-hidden"
      style={{
        width: `${width}px`, // Dynamically set the button's width based on the 'width' prop
        height: `${height}px`, // Dynamically set the button's height
        borderRadius: "10px", // Rounded corners for the button
        position: "relative", // Child elements (like shimmer) are positioned relative to this container
      }}
      onMouseEnter={handleMouseEnter} // Hover state activation when mouse enters the button
      onMouseLeave={handleMouseLeave} // Hover state deactivation when mouse leaves the button
    >
      {/* Inner container for the button with gradient background */}
      <div
        style={{
          width: `${width - 2}px`, // Slightly smaller width for the inner div to create a border effect
          height: `${height - 2}px`, // Slightly smaller height for the inner div
          background: `linear-gradient(to bottom, #${backgroundColor}, #${toColor})`, // Gradient background from top to bottom
          borderRadius: "10px", // Rounded corners for consistency
          display: "flex", // Using flexbox to center the contents (text and vector)
          alignItems: "center", // Vertical centering of contents
          justifyContent: "center", // Horizontal centering of contents
          position: "relative", // Ensures child elements (e.g., shimmer effect) stay within the button's bounds
        }}
        className="relative"
      >
        {/* Container for the button text and optional vector */}
        <span className="flex items-center justify-center gap-[7px]">
          {/* Displaying the text label with slight opacity */}
          <p style={{ opacity: 0.8, fontSize: "18px" }} className="font-thin">
            {text}
          </p>

          {/* Conditionally rendering the vector image if provided */}
          {vector && (
            <motion.span
              className="flex items-center justify-center"
              animate={{
                // Animating the vector position on hover
                x: isHovered ? 3 : 0, // Slight movement on hover for added interaction
              }}
              transition={{ type: "spring", stiffness: 300 }} // Spring physics for a smooth animation effect
            >
              {/* Display the vector image with optimized loading */}
              <Image
                src={vector}
                width={vectorWidth} // Width of the vector image based on the 'vectorWidth' prop
                height={100} // Fixed height for the vector icon
                alt="button-vector" // Alt text for accessibility
                draggable="false" // Prevent dragging of the image
              />
            </motion.span>
          )}
        </span>

        {/* Shimmer effect element that animates across the button */}
        <motion.div
          className="absolute w-[10px] bg-white rotate-[24deg] shimmer-effect"
          style={{
            height: `${height + 3}px`, // Height adjusted to the button's height
          }}
          initial={{
            x: -80, // Start position of the shimmer off-screen to the left
            opacity: 0, // Initial opacity is 0 for invisibility
            rotate: "25deg", // Slight rotation for a dynamic shimmer effect
          }}
          animate={{
            x: isHovered ? 110 : -80, // Move the shimmer from left to right on hover
            opacity: isHovered ? [0.35, 0] : 0, // Fade in/out the shimmer effect based on hover state
            rotate: "25deg", // Keep the rotation fixed for the shimmer
          }}
          transition={{
            duration: 0.5, // Duration for the shimmer movement and opacity change
            ease: "easeInOut", // Smooth easing for the shimmer transition
          }}
        />
      </div>
    </motion.div>
  );
};

// Exporting the Button component for use in other parts of the application
export default Button;
