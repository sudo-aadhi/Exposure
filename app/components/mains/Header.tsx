/**
 * Header Component
 *
 * A responsive and interactive header component for a web application.
 * Features navigation buttons and social media connection icons.
 *
 * Key Features:
 * - Responsive layout with flexbox
 * - Interactive buttons with hover effects using Framer Motion
 * - Dynamic rendering of connection icons from configuration
 * - Optimized image loading with Next.js Image component
 *
 * Component Structure:
 * - Main Header container
 *   - Left section: Navigation buttons (Home, Components, Pricing)
 *   - Right section: Connection icons
 *
 * Performance Considerations:
 * - Uses client-side rendering for interactive elements
 * - Optimized image loading for connection icons
 */

"use client";
import { motion } from "framer-motion"; // Importing Framer Motion for animations
import React from "react";
import { connectComponentProp } from "@/config"; // Importing connection components from config file
import Image from "next/image"; // Importing Image component for optimized image rendering in Next.js

// Header component that holds the navigation and connection icons
const Header = () => {
  return (
    <div className="flex items-center justify-between w-[1323px] h-[36px] absolute top-[30px]">
      {/* Left navigation buttons: Home, Components, and Pricing */}
      <div className="flex items-center justify-between w-[340px] h-full">
        <HomeButton />
        <ComponentsButton />
        <PricingButton />
      </div>
      {/* Right side for connection icons */}
      <div className="flex w-[132px] h-full items-center justify-evenly">
        {connectComponentProp.map((icon) => {
          return <ConnectComponent svg={icon.svg} key={icon.key} />;
        })}
      </div>
    </div>
  );
};

/**
 * HomeButton Component
 *
 * Interactive button for the Home navigation item.
 * Features a hover animation for opacity change.
 */
const HomeButton = () => {
  return (
    <div className="flex justify-center items-center w-[92px] h-[36px] rounded-full cursor-pointer shadow-md border border-[#303032] bg-gradient-to-b from-[#0a0a0b] to-[#24242a]">
      <motion.p
        className="font-inter opacity-50"
        whileHover={{
          opacity: 50, // Changes opacity when hovered
        }}
        transition={{
          duration: 0.2, // Smooth transition duration for opacity change
          ease: "easeInOut", // Ease-in and ease-out transition timing
        }}
      >
        Home
      </motion.p>
    </div>
  );
};

/**
 * ComponentsButton Component
 *
 * Button for the Components navigation item.
 */
const ComponentsButton = () => {
  return (
    <div className="flex justify-center items-center w-[133px] h-[36px] border border-[#303032] bg-gradient-to-b from-[#0a0a0b] to-[#24242a] rounded-full cursor-pointer shadow-md">
      <p className="font-aeonic opacity-50">Components</p>
    </div>
  );
};

/**
 * PricingButton Component
 *
 * Button for the Pricing navigation item.
 */
const PricingButton = () => {
  return (
    <div className="flex justify-center items-center w-[92px] h-[36px] border border-[#303032] bg-gradient-to-b from-[#0a0a0b] to-[#24242a] rounded-full cursor-pointer shadow-md">
      <p className="font-aeonic opacity-50">Pricing</p>
    </div>
  );
};

/**
 * ConnectComponent
 *
 * Renders a connection icon (e.g., social media) with optimized image loading.
 *
 * @param {Object} props - Component props
 * @param {string} props.svg - The SVG image source for the icon
 */
const ConnectComponent = ({ svg }: { svg?: any }) => {
  return (
    <div className="flex items-center justify-center w-[36px] h-full rounded-md border border-[#303032] bg-gradient-to-b from-[#0a0a0b] to-[#24242a]">
      {/* Image component for optimized rendering of SVG icons */}
      <Image
        src={svg} // The SVG image source passed from parent component
        alt="Connect" // Alt text for accessibility
        width={21.67} // The width of the image
        height={100} // The height of the image
        draggable="false" // Disables image dragging for better UX
      />
    </div>
  );
};

export default Header;
