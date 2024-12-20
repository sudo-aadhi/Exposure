import React from "react"; // Importing React for JSX rendering
import Badge from "@/app/components/layouts/Badge"; // Importing Badge component to display a notification badge
import { BadgeComponentProp } from "@/config"; // Importing configuration for badge properties
import Hero from "@/app/components/layouts/Hero"; // Importing Hero section component
import HeroDisplay from "@/app/components/layouts/HeroDisplay"; // Importing HeroDisplay section component
import FallingMeteorsBackground from "@/app/components/animated/FallingMeteors"; // Importing falling meteors animation
import MovingBrands from "@/app/components/animated/ScrollToRevealBrands"; // Importing animated moving brands effect
import PurpleGlowOverlay from "@/app/components/layouts/PurpleGlowOverlay";
import Features from "@/app/components/layouts/Features";
import BentoGrid from "../layouts/BentoGrid";
const rightChevion = BadgeComponentProp; // Storing badge component properties for the chevron icon

const Body = () => {
  return (
    <div className="flex flex-col items-center w-full h-full relative top-[100px]">
      <Badge
        text="Announcing our new website"
        vectorImage={rightChevion}
        vectorWidth={11}
        position={0} // Add this line with an appropriate value
      />
      <FallingMeteorsBackground />
      <Hero />
      <HeroDisplay />
      <MovingBrands />
      <PurpleGlowOverlay value={1700} opacityValue={0.5} delayValue={1} />
      <BentoGrid />
    </div>
  );
};

export default Body;
