import React from "react";
import AnimatedBentoBackground from "../animated/AnimatedBentoBackground";

const BentoBackground = () => {
  return (
    <div className="flex flex-col items-center relative top-[340px] w-[1200px] h-[1400px] overflow-hidden">
      <AnimatedBentoBackground />
    </div>
  );
};

export default BentoBackground;
