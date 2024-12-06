"use client";
import React, { useCallback, useState } from "react";
import DotBackground from "@/app/components/layouts/DotBackgrounds";
import BentoBadge from "@/app/components/layouts/BentoBadge";
import { Box } from "lucide-react";

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
          {<AccessCodeChild />}
        </DotBackground>
      </div>
    </div>
  );
};

const AccessCodeChild = () => {
  const [hovered, isHovered] = useState(false);

  const handleHover = useCallback(() => isHovered((current) => !current), []);
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full p-8"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="flex flex-col items-start max-w-[600px] gap-[30px]">
        {/* Badge Section */}
        <div className="flex w-full h-auto">
          <BentoBadge text="Step 1" hover={hovered}>
            {<Box size={17} />}
          </BentoBadge>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-[20px]">
          <h2 className="font-inter text-[33px] bg-gradient-to-r from-[#69666F] via-[#FEFDFB] to-[#948F95] bg-clip-text text-transparent">
            Access Our Component Code
          </h2>
          <p className="font-inter text-[14px] bg-gradient-to-r from-[#69666F] via-[#FEFDFB] to-[#948F95] bg-clip-text text-transparent opacity-50 leading-relaxed">
            Explore a vast collection of beautifully designed components
            tailored for every need. Browse through, search for the one that
            fits your project perfectly, and pick your favorite. With countless
            options at your fingertips, crafting stunning interfaces has never
            been easier!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccessCode;
