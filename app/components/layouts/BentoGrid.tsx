import React from "react";

const BentoGrid = () => {
  return (
    <div className="flex flex-col items-center w-[1200px] h-[940px] relative top-[370px] gap-8">
      {/* The hero text container of the bento grids  */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl bg-gradient-to-r from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent opacity-45 font-inter">
          Why Exposure over any others
        </h2>
        <h5 className="text-[17px] bg-gradient-to-r from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent opacity-25 font-inter w-[617px] text-center">
          Take a look at why people choose exposure over any others and see why
          we are ahead of others
        </h5>
      </div>
      {/* The bento grids container  */}
      <div className="flex items-center w-[1200px] h-[770px] border"></div>
    </div>
  );
};

export default BentoGrid;
