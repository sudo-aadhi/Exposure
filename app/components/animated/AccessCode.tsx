"use client";
import React, { useCallback, useState } from "react";
import DotBackground from "@/app/components/layouts/DotBackgrounds";
import BentoBadge from "@/app/components/layouts/BentoBadge";
import {
  Box,
  Crosshair,
  TextCursor,
  Menu,
  PenTool,
  Magnet,
  Wand,
  Ruler,
  Bot,
  LockKeyholeOpen,
  Type,
  Bug,
} from "lucide-react";
import BentoCodePreview from "@/app/components/animated/BentoCodePreview";

const AccessCode = () => {
  return (
    <div className="flex items-center justify-center w-[1195px] h-[280px] bg-gradient-to-b from-[#716B6A] to-[#121212] rounded-[27px]">
      <div className="flex items-center justify-center w-[1192px] h-[277px] bg-black rounded-[27px]">
        <DotBackground
          width="1192"
          height="275"
          dotOpacity={0.2}
          dotSize={0.7}
          dotSpacing={12}
          borderRadius={27}
        >
          <AccessCodeChild />
          <AnimatedAccessCodeComponent />
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
      className="flex flex-col items-center justify-center w-full h-full p-8 z-10"
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
          <p className="font-inter text-[14px] bg-gradient-to-r from-[#69666F] via-[#FEFDFB] to-[#948F95] bg-clip-text text-transparent opacity-45 leading-relaxed">
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

const AnimatedAccessCodeComponent = () => {
  return (
    <div
      className="flex items-center justify-center w-[450px] h-[250px] bg-gradient-to-r from-black via-[#FFBB00] to-transparent rounded-t-[20px] border border-[#ffffff1f] relative top-[25px] right-[35px] shadow-md"
      style={{
        boxShadow: "rgba(255, 187, 0, 0.2) 0px 0px 317px 5px", // Golden glow effect
      }}
    >
      <div className="flex items-center justify-start w-[450px] h-[249px] bg-black rounded-t-[20px] relative top-[1px] bg-grid-4-s-2-neutral-950">
        {/* The container containing icons  */}
        <div className="flex items-center justify-center w-[25px] h-full rounded-tl-[20px] bg-gradient-to-b from-[#282828] to-transparent relative left-[0.6px]">
          <div className="flex flex-col items-center justify-center w-[24.5px] h-full rounded-tl-[20px] bg-gradient-to-b from-[#0d0d0d] to-black relative right-[0.4px] gap-[10px]">
            <Crosshair size={10} color="#4b4b4b" />
            <TextCursor size={10} color="#4b4b4b" />
            <Menu size={10} color="#4b4b4b" />
            <PenTool size={10} color="#4b4b4b" />
            <Magnet size={10} color="#4b4b4b" />
            <Wand size={10} color="#444444" />
            <Ruler size={10} color="#393939" />
            <Bot size={10} color="#353535" />
            <LockKeyholeOpen size={10} color="#2F2F2F" />
            <Type size={10} color="#252525" />
            <Bug size={10} color="#1F1F1F" />
          </div>
        </div>
        {/* The window container which has the code and the preview component  */}
        <div className="flex w-full h-full rounded-tr-[20px]">
          {/* The code component  */}
          <BentoCodePreview />
        </div>
      </div>
    </div>
  );
};

export default AccessCode;
