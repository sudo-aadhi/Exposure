import React from "react";

const AnimatedBentoGrids = () => {
  return (
    <div className="flex flex-col items-center w-[952px] h-[596px] absolute top-[1680px]">
      <WidedAnimatedBentoGrid />
      <span className="w-full h-auto flex gap-[20px]">
        <SmallAnimatedBentoGridLeft />
        <SmallAnimatedBentoGridRight />
      </span>
    </div>
  );
};

const WidedAnimatedBentoGrid = () => {
  return (
    <div className="absolute z-10 h-[282.08px] w-[950px] bg-gradient-to-b from-[#0F0F17] to-[#02000F] rounded-[25px] border border-[#3d3c437f]">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff18_1px,_transparent_1px)] bg-[size:20px_20px]">
        {/* Adjusted opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02000F] flex flex-col items-center w-full h-full rounded-[25px]"></div>
      </div>
    </div>
  );
};

const SmallAnimatedBentoGridLeft = () => {
  return (
    <div className="relative z-10 h-[282.08px] w-[465px] bg-gradient-to-b from-[#0F0F17] to-[#02000F] rounded-[25px] border border-[#3d3c437f] top-[310px]">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff18_1px,_transparent_1px)] bg-[size:20px_20px]">
        {/* Adjusted opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02000F] flex flex-col items-center w-full h-full rounded-[25px]"></div>
      </div>
    </div>
  );
};

const SmallAnimatedBentoGridRight = () => {
  return (
    <div className="relative z-10 h-[282.08px] w-[465px] bg-gradient-to-b from-[#0F0F17] to-[#02000F] rounded-[25px] border border-[#3d3c437f] top-[310px]">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff18_1px,_transparent_1px)] bg-[size:20px_20px]">
        {/* Adjusted opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02000F] flex flex-col items-center w-full h-full rounded-[25px]"></div>
      </div>
    </div>
  );
};

export default AnimatedBentoGrids;
