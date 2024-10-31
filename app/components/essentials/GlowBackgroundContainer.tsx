import React from "react";

const GlowBackgroundContainer = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-transparent relative top-[315px]">
      <div className="relative w-[500px] h-[500px] flex items-center justify-center">
        {/* Container for all layers */}
        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
          {/* Largest Layer - Layer 1 */}
          <div className="absolute w-[500px] h-[500px] flex items-center justify-center">
            <div
              className="absolute w-full h-full rounded-full"
              style={{
                backgroundColor: "#B47BFF",
                opacity: 1,
                boxShadow: "0 0 150px #375CFF",
              }}
            />
            <div
              className="absolute w-full h-full rounded-full"
              style={{
                backgroundColor: "rgba(55, 92, 255, 0.5)",
                filter: "blur(20px)",
                opacity: 1,
              }}
            />
          </div>

          {/* Middle Layer - Layer 2 */}
          <div className="absolute w-[500px] h-[500px] flex items-center justify-center">
            <div
              className="absolute w-full h-full rounded-full"
              style={{
                backgroundColor: "#B47BFF",
                opacity: 1,
                boxShadow: "0 0 300px #0E289A",
              }}
            />
            <div
              className="absolute w-full h-full rounded-full"
              style={{
                backgroundColor: "rgba(55, 92, 255, 0.5)",
                filter: "blur(20px)",
                opacity: 1,
              }}
            />
          </div>

          {/* Smallest Layer - Layer 3 */}
          <div className="absolute w-[500px] h-[500px] flex items-center justify-center">
            <div
              className="absolute w-full h-full rounded-full"
              style={{
                backgroundColor: "#B47BFF",
                opacity: 1,
                boxShadow: "0 0 500px #0E289A",
              }}
            />
            <div
              className="absolute w-full h-full rounded-full"
              style={{
                backgroundColor: "rgba(55, 92, 255, 0.5)",
                filter: "blur(20px)",
                opacity: 1,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlowBackgroundContainer;
