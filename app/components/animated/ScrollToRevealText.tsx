"use client"; // Enable client-side rendering for this component
import React, { useRef } from "react";
import { MovingBrandProp } from "@/config";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

/**
 * MovingBrands Component
 *
 * A high-performance, visually engaging component to showcase brand logos with smooth animations.
 * This component leverages Framer Motion for animation and is optimized for client-side rendering.
 *
 * Key Features:
 * - Animates brand logos into view with customizable delay and smooth transitions.
 * - Only triggers animations once when the container enters the viewport.
 * - Designed for high visual impact with smooth cubic-bezier easing.
 *
 * Tech Highlights:
 * - Uses `useRef` and `useInView` from Framer Motion for efficient viewport detection.
 * - Combines Next.js's Image optimization for high-quality logo rendering.
 * - Fully responsive and ensures a smooth user experience across devices.
 */

const MovingBrands = () => {
  const containerRef = useRef(null); // Reference for the container element
  const isInView = useInView(containerRef, { once: true }); // Trigger animation only once when in view

  // Animation delay between items for a staggered, smoother flow
  const itemDelay = 0.2;

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center gap-[35px] justify-center w-[1000px] h-[100px] relative top-[220px] overflow-hidden"
    >
      {/* Animated heading showcasing the trustworthiness and reach of the platform */}
      <motion.h2
        className="text-center text-[15px] text-[#666666]"
        initial={{
          opacity: 0,
          filter: "blur(15px)",
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                filter: "blur(0px)",
              }
            : {}
        }
        transition={{
          duration: 1.5, // Extended duration for a more gradual fade-in effect
          delay: 0.5, // Adds a slight delay for better sequencing
          ease: [0.22, 0.61, 0.36, 1], // Smooth cubic-bezier transition
        }}
      >
        Trusted By 50,000+ businesses for innovative development and design
      </motion.h2>

      {/* Container for brand logos with staggered entry animations */}
      <div className="flex items-center justify-center gap-[44px]">
        {MovingBrandProp.map((item, idx) => (
          <motion.span
            className="flex items-center justify-center"
            key={idx}
            initial={{
              y: 20, // Start with a slight downward offset
              opacity: 0, // Initially hidden
              filter: "blur(15px)", // Apply a blur effect for a soft appearance
            }}
            animate={
              isInView
                ? {
                    y: 0, // Animate to original position
                    opacity: 1, // Fade in
                    filter: "blur(0px)", // Remove blur
                  }
                : {}
            }
            transition={{
              duration: 1, // Smooth animation timing
              delay: idx * itemDelay, // Staggered entry based on index
              ease: [0.22, 0.61, 0.36, 1], // Easing for natural motion
            }}
          >
            {/* Render brand logos using optimized Next.js Image component */}
            <Image
              src={item.svg}
              alt={item.brand}
              width={item.width * 2} // Scale dimensions for higher clarity
              height={item.height * 2}
              draggable="false" // Prevent accidental dragging
              className="object-contain" // Maintain aspect ratio
            />
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default MovingBrands;
