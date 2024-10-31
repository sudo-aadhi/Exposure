import React from "react";

interface ButtonProp {
  width: number;
  height: number;
  background: string;
  position: number;
  context: string;
}

const Button: React.FC<ButtonProp> = ({
  width,
  height,
  background,
  position,
  context,
}) => {
  return (
    <div
      className="relative flex items-center justify-center bg-gray-400 rounded-[10px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 cursor-pointer"
      style={{
        width: `${width + 4}px`,
        height: `${height + 4}px`,
        top: `${position}px`,
      }}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-full opacity-80 blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,153,0,0.8) 0%, rgba(255,153,0,0) 70%)",
        }}
      />

      {/* Button */}
      <div
        className="relative flex items-center justify-center rounded-[10px] overflow-hidden"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          background: "linear-gradient(to bottom, #FFB300, #FF8F00)",
          transform: "perspective(500px) rotateX(5deg)",
          boxShadow: "0 4px 15px rgba(255,153,0,0.5)",
        }}
      >
        <span className="text-white font-jost">{context}</span>
      </div>
    </div>
  );
};

export default Button;
