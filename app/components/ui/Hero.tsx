import React from "react";
import Badge from "../essentials/Badge";
import Button from "../essentials/Button";
import DiscordButton from "../essentials/DiscordButton";

const Hero = () => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <Badge
        width={285}
        icon={"https://svgshare.com/i/1C5H.svg"}
        iconWidth={17}
        context="3000 + "
        secondaryContext="Community Members"
        position={145}
      />
      <TheBannerComponent />
    </div>
  );
};

const TheBannerComponent = () => {
  return (
    <div className="flex flex-col items-center relative top-[160px]">
      <h1
        className="text-[65px] font-jost"
        style={{
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.85) 38%, rgba(255, 255, 255, 0.85) 63%, rgba(255, 255, 255, 0.25) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Build Everything You Dream About
      </h1>
      <h3 className="w-[419px] h-auto flex flex-wrap items-center text-center font-jostThin relative top-[15px] opacity-50">
        Bring your vision to life with a collection of expertly crafted
        components that empower you to build stunning, high-performance
        interfaces.
      </h3>
      <span className="flex items-center justify-center gap-[10px]">
        <Button
          width={120}
          height={40}
          background="orange"
          position={45}
          context="Get Started"
        />
        <DiscordButton
          position={45}
          icon="https://svgshare.com/i/1C6W.svg"
          context="Join our Discord"
        />
      </span>
    </div>
  );
};

export default Hero;
