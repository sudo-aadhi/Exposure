"use client";

import { motion } from "framer-motion";
import React from "react";

/**
 * AnimatedRippleEffect Component
 *
 * A visually engaging component that creates a ripple effect animation,
 * suitable for modern UI designs. The component leverages Framer Motion
 * for fluid animations and highly customizable behavior.
 *
 * Key Features:
 * - Dynamic ripple effect with concentric circles that animate in sequence.
 * - Highly customizable through props such as `mainCircleSize`, `mainCircleOpacity`, and `numCircles`.
 * - Performance-optimized using `motion.div` for smooth rendering and animation.
 *
 * Component Highlights:
 * - Fully responsive, designed to fit any container size.
 * - Scalable and configurable for various design requirements (e.g., color, size, opacity).
 * - Lightweight and efficient, ensuring minimal impact on application performance.
 *
 * Usage:
 * - Ideal for backgrounds, loading screens, or attention-grabbing UI sections.
 * - Easy integration into React-based projects with support for className overrides.
 */

/**
 * Interface for defining the configurable properties of the AnimatedRippleEffect component.
 */
interface AnimatedRippleEffectProps {
  /**
   * Size of the innermost circle in the ripple effect (default: 50px).
   */
  mainCircleSize?: number;

  /**
   * Initial opacity of the innermost circle in the ripple effect (default: 0.24).
   */
  mainCircleOpacity?: number;

  /**
   * Total number of circles to render in the ripple effect (default: 6).
   */
  numCircles?: number;

  /**
   * Additional CSS class names to customize the styling of the container.
   */
  className?: string;
}

/**
 * Functional React component for rendering an animated ripple effect.
 *
 * @param {AnimatedRippleEffectProps} props - Configurable properties for the component.
 * @returns {JSX.Element} A motion-enabled div containing animated ripple circles.
 */
const AnimatedRippleEffect: React.FC<AnimatedRippleEffectProps> = ({
  mainCircleSize = 50,
  mainCircleOpacity = 0.24,
  numCircles = 6,
  className = "",
}) => {
  return (
    <motion.div
      // Root container for the ripple effect
      className={`pointer-events-none select-none absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent)] ${className} z-10 shadow-md`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 3,
        ease: "easeInOut",
      }}
    >
      {/* Generate an array of circles based on the numCircles prop */}
      {Array.from({ length: numCircles }, (_, i) => {
        // Calculate properties for each circle
        const size = mainCircleSize + i * 70; // Increment size for each circle
        const opacity = Math.max(mainCircleOpacity - i * 0.04, 0.1); // Gradual fade-out effect
        const animationDelay = i * 0.4; // Staggered animation start times
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid"; // Final circle has a dashed border
        const borderOpacity = 5 + i * 5; // Gradual increase in border transparency

        return (
          <motion.div
            key={i}
            // Individual circle styling
            className="absolute rounded-full bg-[#AD28FF] shadow-xl border"
            style={{
              width: size, // Dynamic width
              height: size, // Dynamic height
              borderStyle, // Solid or dashed border
              borderWidth: 1, // Fixed border width
              borderColor: `hsl(var(--foreground) / ${borderOpacity}%)`, // Dynamic border color
              top: "40.5%", // Center alignment
              left: "50%", // Center alignment
              boxShadow: "0 0 500px 65px #C567FF", // Glow effect
            }}
            // Initial animation properties
            initial={{ scale: 0, x: "-50%", y: "-50%", opacity: 0 }}
            // Target animation properties
            animate={{
              scale: [0, 1.2, 0], // Scale up and shrink back
              opacity: [0, opacity, 0], // Fade in and fade out
            }}
            // Animation timing and looping
            transition={{
              repeat: Infinity, // Infinite animation loop
              duration: 6, // Duration of one animation cycle
              delay: animationDelay, // Staggered delay
              ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier easing
            }}
          />
        );
      })}
    </motion.div>
  );
};

export default AnimatedRippleEffect;
