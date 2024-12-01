"use client"; // Ensure this component is rendered on the client side
import React, { useRef } from "react";
import { MovingBrandProp } from "@/config"; // Import the list of brand properties
import Image from "next/image";
import { motion, useInView } from "framer-motion";

/**
 * ScrollToRevealBrand Component
 *
 * A sleek, animated brand showcase component that reveals brand logos as the user scrolls.
 * Perfect for building trust and credibility on marketing or landing pages.
 *
 * Key Features:
 * - Scroll-triggered animations that engage users as they navigate.
 * - Optimized for performance: animations are triggered once using `useInView`.
 * - Smooth and visually appealing motion effects with customizable timing and delays.
 *
 * Design Highlights:
 * - Minimalistic design with responsive alignment for modern UI aesthetics.
 * - Integrates Next.js's Image for optimized asset handling.
 * - Provides flexibility to display any number of brands with staggered animations.
 */

const ScrollToRevealBrand = () => {
  // Reference to the container element to track its visibility in the viewport
  const containerRef = useRef(null);

  // Determines if the container is in view; triggers animations only once for efficiency
  const isInView = useInView(containerRef, { once: true });

  // Stagger delay between individual brand logo animations
  const itemDelay = 0.2;

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center gap-[35px] justify-center w-[1000px] h-[100px] relative top-[220px] overflow-hidden"
    >
      {/* Header text with fade-in and blur-clear animation */}
      <motion.h2
        className="text-center text-[15px] text-[#666666]"
        initial={{
          opacity: 0, // Text starts fully transparent
          filter: "blur(15px)", // Apply an initial blur effect
        }}
        animate={
          isInView
            ? {
                opacity: 1, // Fade in the text
                filter: "blur(0px)", // Clear the blur for better readability
              }
            : {}
        }
        transition={{
          duration: 1.5, // Smooth fade-in over 1.5 seconds
          delay: 0.5, // Add a slight delay for timing alignment
          ease: [0.22, 0.61, 0.36, 1], // Cubic-bezier easing for fluid motion
        }}
      >
        Trusted By 50,000+ businesses for innovative development and design
      </motion.h2>

      {/* Animated brand logos displayed with staggered entry */}
      <div className="flex items-center justify-center gap-[44px]">
        {MovingBrandProp.map((item, idx) => (
          <motion.span
            className="flex items-center justify-center"
            key={idx}
            initial={{
              y: 20, // Logos start slightly below their final position
              opacity: 0, // Initially hidden
              filter: "blur(15px)", // Initial blur for smooth entry effect
            }}
            animate={
              isInView
                ? {
                    y: 0, // Move to the original position
                    opacity: 1, // Fully visible
                    filter: "blur(0px)", // Clear blur effect
                  }
                : {}
            }
            transition={{
              duration: 1, // Animate over 1 second
              delay: idx * itemDelay, // Staggered animation based on index
              ease: [0.22, 0.61, 0.36, 1], // Smooth and natural easing curve
            }}
          >
            {/* Render brand logo using Next.js's optimized Image component */}
            <Image
              src={item.svg} // Logo image source
              alt={item.brand} // Accessibility: logo description
              width={item.width * 2} // Double the original width for sharp display
              height={item.height * 2} // Double the original height for sharp display
              draggable="false" // Prevent dragging for a clean user experience
              className="object-contain" // Maintain aspect ratio without cropping
            />
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default ScrollToRevealBrand;
