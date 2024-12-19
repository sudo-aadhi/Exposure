"use client";
import React from "react";
import GridAndCircleBackground from "./GridAndCircleBackground";
import { motion } from "framer-motion";

const Section = () => {
  return (
    <>
      <motion.div
        className="flex flex-col items-center w-[1200px] h-[940px] relative top-[370px]"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 3.5, // Slightly longer duration for a smoother effect
            delay: 0.5,
            ease: [0.25, 0.8, 0.25, 1], // Custom cubic-bezier easing for a smoother transition
          },
        }}
        viewport={{
          once: true,
        }}
      >
        <FeatureBadge />
        <SectionText />
        <AnimatedSectionComponent />
      </motion.div>
    </>
  );
};

const FeatureBadge = () => {
  return (
    <div className="flex items-center justify-center w-[110px] h-[32px] bg-gradient-to-b from-black to-[#28093B] rounded-full">
      <h5 className="text-[15px] font-light bg-gradient-to-r from-[#E59CFF] via-[#BA9CFF] to-[#9CB2FF] bg-clip-text text-transparent">
        Features
      </h5>
    </div>
  );
};
const SectionText = () => {
  return (
    <div className="flex flex-col w-full h-[128px] items-center relative top-[20px] opacity-70">
      <h1 className="font-medium text-[35px] bg-gradient-to-b from-white to-[#ffffff7c] bg-clip-text text-transparent">
        Exposure thrives
      </h1>
      <h1 className="font-normal  text-[35px] bg-gradient-to-b from-white to-[#ffffff26] bg-clip-text text-transparent">
        on these core elements
      </h1>
    </div>
  );
};

const AnimatedSectionComponent = () => {
  return (
    <div className="flex w-[984px] h-[432px]">
      <div className="flex items-center justify-center w-full h-auto">
        <GridAndCircleBackground />
      </div>
    </div>
  );
};

export default Section;
