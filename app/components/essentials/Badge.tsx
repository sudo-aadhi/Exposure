"use client";
import Image from "next/image";
import React from "react";

interface BadgeProps {
  width: number;
  icon: string;
  iconWidth: number;
  context: string;
  secondaryContext: string;
  position: number;
}

const Badge: React.FC<BadgeProps> = ({
  width,
  icon,
  iconWidth,
  context,
  secondaryContext,
  position,
}) => {
  return (
    <div
      className="flex items-center justify-center gap-[5px] text-center h-[35px] bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#33313D] relative
"
      style={{
        width: `${width}px`,
        top: `${position}px`,
      }}
    >
      <span className="flex items-center justify-center w-full h-full gap-[7px]">
        <h2 className="font-jost">{context}</h2>
        <Image
          src={icon}
          width={iconWidth}
          height={iconWidth}
          alt="ICON"
          draggable="false"
        />
        <h2 className="opacity-50 font-jost">{secondaryContext}</h2>
      </span>
    </div>
  );
};

export default Badge;
