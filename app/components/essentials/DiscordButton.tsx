"use client";

import { ParticlesComponent } from "@/particles";
import Image from "next/image";
import React from "react";

interface DiscordButtonProps {
  position: number;
  icon: string;
  context: string;
}

const DiscordButton: React.FC<DiscordButtonProps> = ({
  position,
  icon,
  context,
}) => {
  return (
    <div
      className="relative w-[168px] h-[40px] rounded-[10px] shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer overflow-hidden"
      style={{
        top: `${position}px`,
        background: "linear-gradient(to bottom, #3A3527, #FFE369)",
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div className="absolute inset-0 opacity-50">
        {/* <ParticlesComponent id="particles" className="w-full h-full" /> */}
      </div>
      <div className="absolute inset-0 flex items-center justify-center gap-[10px] z-10">
        {icon && (
          <Image
            src={icon}
            alt="Discord-Icon"
            width={21}
            height={16}
            className="object-contain"
          />
        )}
        <h3 className="font-jost text-sm text-white">{context}</h3>
      </div>
    </div>
  );
};

export default DiscordButton;
