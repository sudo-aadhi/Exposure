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
      className="flex items-center justify-center w-[168px] h-[40px] gap-[10px] relative rounded-[10px] shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer"
      style={{
        top: `${position}px`,
        background: "linear-gradient(to bottom, #3A3527, #FFE369)",
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
      }}
    >
      {icon && (
        <Image
          src={icon}
          alt="Discord-Icon"
          width={21}
          height={16}
          className="object-contain"
        />
      )}
      <h3 className="font-jost text-sm opacity-75 text-white">{context}</h3>
    </div>
  );
};

export default DiscordButton;
