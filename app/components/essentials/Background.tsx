import React from "react";

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="absolute top-0 z-10 h-full w-full bg-gradient-to-b from-[#030113] to-[#02000F]">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff18_1px,_transparent_1px)] bg-[size:20px_20px]">
        {/* Adjusted opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02000F] flex flex-col items-center w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Background;
