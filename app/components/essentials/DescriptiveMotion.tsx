import Image from "next/image";
import React from "react";

const DescriptiveMotion = () => {
  return (
    <div className="flex flex-col items-center w-[549px] h-[141px] relative top-[635px] text-center gap-[20px]">
      <h1
        className="text-[45px]"
        style={{
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.85) 38%, rgba(255, 255, 255, 0.85) 63%, rgba(255, 255, 255, 0.25) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Crafted Precisely With
      </h1>
      <p className="text-[17.5px] opacity-30 font-jostThin relative bottom-[15px]">
        All the components are built using modern and advanced technologies
      </p>
      <span className="flex items-center justify-center w-[311px] h-auto gap-[45px]">
        {SVG_URL.map((item, index) => {
          return (
            <RenderSVGComponent
              icon={item.Icon}
              name={item.Name}
              width={item.Width}
              height={item.Height}
              key={index}
            />
          );
        })}
      </span>
    </div>
  );
};

interface RenderSVGComponentProp {
  icon: string;
  name: string;
  width: number;
  height: number;
}

const SVG_URL = [
  {
    Name: "Framer-Motion",
    Icon: "https://svgshare.com/i/1C6b.svg",
    Width: 22,
    Height: 22,
  },
  {
    Name: "NEXT-JS",
    Icon: "https://svgshare.com/i/1C76.svg",
    Width: 94,
    Height: 19,
  },
  {
    Name: "React-JS",
    Icon: "https://svgshare.com/i/1C7G.svg",
    Width: 27,
    Height: 27,
  },
  {
    Name: "TypeScript",
    Icon: "https://svgshare.com/i/1C66.svg",
    Width: 24,
    Height: 24,
  },
];

const RenderSVGComponent: React.FC<RenderSVGComponentProp> = ({
  icon,
  name,
  width,
  height,
}) => {
  return (
    <Image
      src={icon}
      alt={name}
      width={width}
      height={height}
      draggable="false"
    />
  );
};

export default DescriptiveMotion;
