import React from "react";
import AnimatedCreditCard from "../animated/AnimatedCreditCard";

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-evenly w-[1200px] h-[810px] relative top-[136px] overflow-hidden">
      <div className="flex flex-col items-center justify-evenly gap-4">
        <FeatureBadge />
        <div className="flex flex-col items-center">
          <h3 className="font-medium text-[35px] bg-gradient-to-b from-white to-[#ffffff7c] bg-clip-text text-transparent">
            Why Choose Exposure UI
          </h3>
          <p className="font-medium text-[15px] bg-gradient-to-b from-white to-[#ffffff7c] bg-clip-text text-transparent w-[850px] text-center opacity-45">
            Take a look at why people choose Exposure over the rest and see why
            we're ahead of the competition
          </p>
        </div>
      </div>

      <AnimatedCreditCard />
    </div>
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

export default Features;
