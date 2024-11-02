"use client";
import { delay, motion } from "framer-motion";
import React from "react";

interface LayerProps {
  shadowSize: number;
  shadowColor: string;
}

const Layer: React.FC<LayerProps> = ({ shadowSize, shadowColor }) => (
  <motion.div
    className="absolute w-full h-full flex items-center justify-center blur-lg"
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{
      duration: 2,
      delay: 0.87,
      ease: "easeInOut",
    }}
  >
    <div
      className="absolute w-full h-full rounded-full"
      style={{
        backgroundColor: "var(--glow-color-1)",
        opacity: 1,
        boxShadow: `0 0 ${shadowSize}px ${shadowColor}`,
      }}
    />
    <div
      className="absolute w-full h-full rounded-full"
      style={{
        backgroundColor: "rgba(55, 92, 255, 0.5)",
        filter: "blur(145px)",
        opacity: 1,
      }}
    />
  </motion.div>
);

const GlowBackgroundContainer: React.FC = () => {
  const layers: LayerProps[] = [
    { shadowSize: 150, shadowColor: "var(--glow-color-2)" },
    { shadowSize: 300, shadowColor: "var(--glow-color-3)" },
    { shadowSize: 500, shadowColor: "var(--glow-color-3)" },
  ];

  return (
    <motion.div
      className="flex items-center justify-center w-full h-screen bg-transparent relative top-[325px]"
      style={
        {
          "--glow-color-1": "#B47BFF",
          "--glow-color-2": "#375CFF",
          "--glow-color-3": "#0E289A",
        } as React.CSSProperties
      }
    >
      <div className="relative w-[500px] h-[500px] flex items-center justify-center backdrop-blur-[500%]">
        {layers.map((layer, index) => (
          <Layer key={index} {...layer} />
        ))}
      </div>
    </motion.div>
  );
};

export default GlowBackgroundContainer;
