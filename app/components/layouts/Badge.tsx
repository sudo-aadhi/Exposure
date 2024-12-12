/**
 * Badge Component
 *
 * A reusable badge component that displays text and an optional vector image.
 * It's designed to be positioned absolutely within its parent container.
 *
 * Features:
 * - Customizable text content
 * - Optional vector image with adjustable width
 * - Configurable vertical positioning
 * - Gradient background with border for visual appeal
 *
 * Usage:
 * <Badge
 *   text="Sample Text"
 *   vectorImage="/path/to/image.svg"
 *   vectorWidth={20}
 *   position={100}
 * />
 */

// Import the Next.js Image component for optimized image handling
import Image from "next/image";
// Import React for defining and utilizing functional components
import React from "react";

// Define the types for the Badge component props
type BadgeProps = {
  text: string; // The text displayed inside the badge
  vectorImage: any; // Optional vector image displayed alongside the text
  vectorWidth: number; // Width of the vector image (in pixels)
  position: number | string; // The vertical position of the badge (used for absolute positioning)
};

const Badge: React.FC<BadgeProps> = ({
  text, // Text to display within the badge
  vectorImage, // The optional vector image
  vectorWidth, // Width of the vector image
  position, // Vertical position of the badge
}) => {
  return (
    // Container for the badge, styled with flex for horizontal alignment and absolute positioning
    <div
      className="flex items-center justify-center w-[262px] h-[32px] bg-gradient-to-b from-[#0C0C0E] to-[#18181b] absolute border border-[#212122] rounded-full gap-[10px]"
      style={{
        // Dynamically set the vertical position based on the `position` prop
        top: typeof position === "number" ? `${position}px` : position,
      }}
    >
      {/* Render the text inside the badge */}
      <p className="text-[14px] font-inter text-[#5d5d5d]">{text}</p>

      {/* Conditionally render the vector image if it is provided */}
      {vectorImage && (
        <Image
          src={vectorImage} // Source of the vector image
          width={vectorWidth} // Width defined by the `vectorWidth` prop
          height={100} // Fixed height for consistent aspect ratio
          alt="vector" // Alt text for accessibility and SEO
          draggable="false" // Prevent dragging for better user experience
        />
      )}
    </div>
  );
};

// Export the Badge component for use in other parts of the application
export default Badge;
