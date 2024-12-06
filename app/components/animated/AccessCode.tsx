"use client";
import React from "react";
import DotBackground from "@/app/components/layouts/DotBackgrounds";

const AccessCode = () => {
  return (
    <div className="flex items-center justify-center w-[1195px] h-[280px] bg-gradient-to-b from-[#716B6A] to-[#1C1924] rounded-[27px]">
      <div className="flex items-center justify-center w-[1192px] h-[277px] bg-black rounded-[27px]">
        <DotBackground
          width="1192"
          height="275"
          dotOpacity={0.3}
          dotSize={0.5}
          dotSpacing={12}
          borderRadius={27}
        >
          {<h1>Hello Jee</h1>}
        </DotBackground>
      </div>
    </div>
  );
};

export default AccessCode;
