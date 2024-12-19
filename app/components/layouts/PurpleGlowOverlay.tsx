/**
 * PurpleGlowOverlay Component
 *
 * A reusable and visually impactful overlay component that features a glowing purple effect.
 * Designed to add a dynamic and modern aesthetic to web applications.
 *
 * Key Features:
 * - Smooth opacity transitions with customizable easing for a refined user experience.
 * - High-performance implementation using Framer Motion for animation control.
 * - Scalable vector graphic (SVG) glow effect with Gaussian blur for a polished appearance.
 *
 * Component Highlights:
 * - Fully responsive and adaptable to different screen sizes and layouts.
 * - Supports dynamic positioning via the `value` prop, allowing flexible placement.
 * - Customizable opacity, delay, and animation settings for diverse use cases.
 */

"use client";
import { motion } from "framer-motion";
import React from "react";

/**
 * Interface for component props.
 * @property {number} value - Vertical position of the overlay in pixels.
 * @property {number} opacityValue - Target opacity value for the overlay.
 * @property {number} delayValue - Delay (in seconds) before the animation starts.
 */
interface PurpleGlowOverlayProps {
  value: number;
  opacityValue: number;
  delayValue: number;
}

/**
 * PurpleGlowOverlay Component
 *
 * A visually striking overlay that integrates animations with SVG-based glow effects.
 * Primarily used to enhance UI aesthetics with dynamic transitions and glowing visuals.
 *
 * @param {PurpleGlowOverlayProps} props - Component properties for customization.
 * @returns {JSX.Element} The rendered overlay component.
 */
const PurpleGlowOverlay: React.FC<PurpleGlowOverlayProps> = ({
  value,
  opacityValue,
  delayValue = 1, // Default delay is 1 second for animations.
}) => {
  return (
    /**
     * The main container for the overlay.
     * Animated using Framer Motion to control opacity transitions and timing.
     */
    <motion.div
      viewport={{
        once: true, // Ensures the animation only runs once when the element is in view.
      }}
      initial={{
        opacity: opacityValue - 0.3, // Starts slightly less opaque for a fade-in effect.
      }}
      whileInView={{
        opacity: opacityValue, // Target opacity achieved when the element is in view.
        transition: {
          ease: [0.42, 0, 0.58, 1], // Custom cubic bezier curve for smooth transitions.
          delay: delayValue, // Configurable delay before animation starts.
          duration: 0.8, // Animation duration set to 0.8 seconds for gradual transition.
        },
      }}
      className="w-full h-[800px] flex items-end absolute"
      style={{
        top: `${value}px`, // Dynamically sets the vertical position.
        opacity: opacityValue, // Ensures CSS opacity matches the animated value.
      }}
    >
      <div className="flex items-center">
        {/**
         * SVG element creating the purple glow effect.
         * Utilizes Gaussian blur and filters for a soft, glowing appearance.
         */}
        <svg
          width="730"
          height="1450"
          viewBox="0 0 730 1450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_558_232)">
            <circle cx="5" cy="725" r="225" fill="#941BDF" />
          </g>
          <defs>
            {/**
             * Filter definition for applying Gaussian blur.
             * Enhances the glow effect by diffusing the edges of the circle.
             */}
            <filter
              id="filter0_f_558_232"
              x="-720"
              y="0"
              width="1450"
              height="1450"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="250" // Adjusts the intensity of the blur effect.
                result="effect1_foregroundBlur_558_232"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </motion.div>
  );
};

export default PurpleGlowOverlay;
