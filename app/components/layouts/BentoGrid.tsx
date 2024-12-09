import React from "react";
import AccessCode from "@/app/components/animated/AccessCode";
import MaximizeCode from "@/app/components/animated/MaximizeCode";

const BentoGrid = () => {
  return (
    <div className="flex flex-col items-center justify-evenly relative top-[540px] w-[1200px] h-[695px]">
      <AccessCode />
      <div className="flex w-full h-auto items-center justify-between">
        <MaximizeCode />
        <MaximizeCode />
      </div>
    </div>
  );
};

export default BentoGrid;
