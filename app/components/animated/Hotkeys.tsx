import React from "react";
import { Command, Keyboard } from "lucide-react";

const Hotkeys = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-[30px]">
      <div className="flex w-[428px] h-[105px] gap-[10px]">
        <div className="flex items-center justify-center w-[110px] h-[106px] bg-gradient-to-b from-[#2B2B2B] to-black rounded-[11px]">
          <div
            className="flex flex-col items-center justify-center w-[107px] h-[104px] bg-black relative top-[0.5px] rounded-[11px] shadow-md gap-[28px] border border-[#1f1f1f]"
            style={{
              background: "radial-gradient(circle, #0D0D0D 0%, #121212 100%)",
              width: "110px",
              height: "104px",
            }}
          >
            <div className="flex w-[65px] h-[21px] items-center justify-end">
              <Command size={26} />
            </div>
            <div className="flex w-[24px] h-[21px] items-center justify-center">
              <h3 className="font-inter text-[18px]">command</h3>
            </div>
          </div>
        </div>
        <h3 className="flex items-center justify-center text-[30px] text-[#848485]">
          +
        </h3>
        {/* The C Key  */}
        <div className="flex items-center justify-center w-[110px] h-[106px] bg-gradient-to-b from-[#2B2B2B] to-black rounded-[11px]">
          <div
            className="flex flex-col items-center justify-center w-[107px] h-[104px] bg-black relative top-[0.5px] rounded-[11px] shadow-md gap-[28px] border border-[#1f1f1f]"
            style={{
              background: "radial-gradient(circle, #0D0D0D 0%, #121212 100%)",
              width: "110px",
              height: "104px",
            }}
          >
            <div className="flex w-[65px] h-[21px] items-center justify-center">
              <h3 className="font-inter text-[28px]">C</h3>
            </div>
          </div>
        </div>
        <h3 className="flex items-center justify-center text-[30px] text-[#848485]">
          +
        </h3>
        {/* The V Key  */}
        <div className="flex items-center justify-center w-[110px] h-[106px] bg-gradient-to-b from-[#2B2B2B] to-black rounded-[11px]">
          <div
            className="flex flex-col items-center justify-center w-[107px] h-[104px] bg-black relative top-[0.5px] rounded-[11px] shadow-md gap-[28px] border border-[#1f1f1f]"
            style={{
              background: "radial-gradient(circle, #0D0D0D 0%, #121212 100%)",
              width: "110px",
              height: "104px",
            }}
          >
            <div className="flex w-[65px] h-[21px] items-center justify-center">
              <h3 className="font-inter text-[28px]">V</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[470px] h-[82px] gap-[10px] ml-9">
        <div className="flex w-[300px] justify-center gap-[8px]">
          <Keyboard />
          <h3 className="text-[18px] font-thin font-inter">
            The Essentials You Truly Need
          </h3>
        </div>
        <p className="text-[14px] text-[#9C9C9D] font-inter w-[428px]">
          Stop searching, start creating! Copy our animated components instantly
          with just Cmd+C and Cmd+V—your next masterpiece is a paste away!
        </p>
      </div>
    </div>
  );
};

export default Hotkeys;
