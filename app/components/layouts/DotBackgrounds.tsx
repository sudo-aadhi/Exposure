"use client";

import React from "react";

interface DotBackgroundProps {
  width?: string;
  height?: string;
  dotSize?: number;
  dotSpacing?: number;
  dotOpacity?: number;
  borderRadius?: number;
  children?: React.ReactNode;
}

const DotBackground: React.FC<DotBackgroundProps> = ({
  width = "100%",
  height = "100vh",
  dotSize = 0.5,
  dotSpacing = 8,
  dotOpacity = 0.8,
  borderRadius = 0,
  children,
}) => {
  return (
    <div
      className="relative overflow-hidden w-full h-full"
      style={{ width, height, borderRadius }}
    >
      <div
        className="absolute inset-0 w-full h-full bg-black"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255, 255, 255, ${dotOpacity}) ${dotSize}px, transparent ${dotSize}px)`,
          backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
          mask: "radial-gradient(circle at center, black, transparent 80%)",
          WebkitMask:
            "radial-gradient(circle at center, black, transparent 80%)",
        }}
      />
      {children && (
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default DotBackground;
