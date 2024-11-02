import Image from "next/image";
import React from "react";

const AnimatedBentoGrids = () => {
  return (
    <div className="flex flex-col items-center w-[952px] h-[596px] absolute top-[1680px]">
      <WidedAnimatedBentoGrid />
      <div className="w-full flex gap-[22px] mt-[28px]">
        <SmallAnimatedBentoGridLeft />
        <SmallAnimatedBentoGridRight />
      </div>
    </div>
  );
};

const WidedAnimatedBentoGrid = () => {
  return (
    <div className="relative w-[952px] h-[282px] rounded-[25px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F17] to-[#02000F] border border-[#3d3c437f] rounded-[25px]" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff18_1px,_transparent_1px)] [background-size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02000F] rounded-[25px]" />

      <div className="relative z-10 h-full flex items-center justify-evenly gap-[25px] p-8 overflow-hidden">
        <div className="w-1/2 flex flex-col items-start gap-6">
          <span className="flex items-center justify-center text-center bg-[#3d3c437f] px-4 py-2 rounded-full backdrop-blur-sm border border-[#c0c0c01d]">
            <Image
              src="https://svgshare.com/i/1C8a.svg"
              alt="Grid"
              width={14}
              height={14}
              className="mr-2"
            />
            <h2 className="text-sm font-jostThin bg-gradient-to-r from-[#999999] to-white bg-clip-text text-transparent">
              Step 1
            </h2>
          </span>

          <div className="space-y-4">
            <h2 className="text-3xl font-jost bg-gradient-to-r from-[#999999] to-white bg-clip-text text-transparent">
              Choose Your Desired Component
            </h2>
            <p className="text-sm font-jostThin bg-gradient-to-r from-[#999999] to-white bg-clip-text text-transparent max-w-md">
              In the component universe select the animated component which you
              need to use in your project file.
            </p>
          </div>
        </div>
        <WidedAnimatedPopUp />
      </div>
    </div>
  );
};

const WidedAnimatedPopUp = () => {
  return (
    <div className="flex items-center justify-center w-[385px] h-[207px] rounded-t-[10px] bg-gradient-to-b from-[#ffffff75] to-[#1C1B24] opacity-50 relative top-[40px]">
      <div className="flex items-center w-[380px] h-[202px] rounded-t-[10px] bg-gradient-to-b from-[#1C1B24] to-[#0B0A14]"></div>
    </div>
  );
};

const SmallAnimatedBentoGridLeft = () => {
  return (
    <div className="relative z-10 h-[282px] w-[465px] bg-gradient-to-b from-[#0F0F17] to-[#02000F] rounded-[25px] border border-[#3d3c437f]">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff18_1px,_transparent_1px)] bg-[size:20px_20px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02000F] flex flex-col items-center justify-center w-full h-full rounded-[25px] p-6">
          <span className="flex items-center justify-center text-center bg-[#3d3c437f] px-4 py-2 rounded-full backdrop-blur-sm border border-[#c0c0c01d] mb-4">
            <Image
              src="https://svgshare.com/i/1C8b.svg"
              alt="Grid"
              width={14}
              height={14}
              className="mr-2"
            />
            <h2 className="text-sm font-jostThin bg-gradient-to-r from-[#999999] to-white bg-clip-text text-transparent">
              Step 2
            </h2>
          </span>
          <h2 className="text-2xl font-jost bg-gradient-to-r from-[#999999] to-white bg-clip-text text-transparent mb-2 w-[200px]">
            Copy The Source Code
          </h2>
          <p className="text-sm font-jostThin bg-gradient-to-r from-[#999999] to-white bg-clip-text text-transparent w-[323px]">
            After finding your desired animated code, just copy the source code
            by clicking the copy button.
          </p>
        </div>
      </div>
    </div>
  );
};

const SmallAnimatedBentoGridRight = () => {
  return (
    <div className="relative z-10 h-[282px] w-[465px] bg-gradient-to-b from-[#0F0F17] to-[#02000F] rounded-[25px] border border-[#3d3c437f]">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff18_1px,_transparent_1px)] bg-[size:20px_20px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02000F] flex flex-col items-center justify-center w-full h-full rounded-[25px] p-6">
          <span className="flex items-center justify-center text-center bg-[#3d3c437f] px-4 py-2 rounded-full backdrop-blur-sm border border-[#c0c0c01d] mb-4">
            <Image
              src="https://svgshare.com/i/1C8D.svg"
              alt="Grid"
              width={14}
              height={14}
              className="mr-2"
            />
            <h2 className="text-sm font-jostThin bg-gradient-to-r from-[#999999] to-white bg-clip-text text-transparent">
              Step 3
            </h2>
          </span>
          <h2 className="text-2xl font-jost bg-gradient-to-r from-[#999999] to-white bg-clip-text text-transparent mb-2 w-[200px]">
            Acquire By Pasting Code
          </h2>
          <p className="text-sm font-jostThin bg-gradient-to-r from-[#999999] to-white bg-clip-text text-transparent w-[289px]">
            Paste the code which you had copied to your specific file, and start
            the journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBentoGrids;
