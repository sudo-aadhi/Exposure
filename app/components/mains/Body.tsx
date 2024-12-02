import React from "react"; // Importing React for JSX rendering
import Badge from "@/app/components/layouts/Badge"; // Importing Badge component to display a notification badge
import { BadgeComponentProp } from "@/config"; // Importing configuration for badge properties
import Hero from "@/app/components/layouts/Hero"; // Importing Hero section component
import HeroDisplay from "@/app/components/layouts/HeroDisplay"; // Importing HeroDisplay section component
import AnimatedTextBlur from "@/app/components/animated/AnimatedTextBlur"; // Importing animated text blur effect
import FallingMeteorsBackground from "@/app/components/animated/FallingMeteors"; // Importing falling meteors animation
import MovingBrands from "@/app/components/animated/ScrollToRevealBrands"; // Importing animated moving brands effect
import ScrollToRevealText from "@/app/components/animated/AnimatedTextBlur"; // Importing scroll-triggered text reveal effect
import ExplosiveText from "../animated/ExposiveText";
const rightChevion = BadgeComponentProp; // Storing badge component properties for the chevron icon

const Body = () => {
  return (
    <div className="flex flex-col items-center w-full h-full relative top-[100px]">
      {/* Badge component displaying a notification message */}
      <Badge
        text="Announcing our new website" // The main message for the badge
        vectorImage={rightChevion} // The chevron vector image for the badge
        vectorWidth={11} // Setting the width of the chevron icon
      />

      {/* Animated background of falling meteors */}
      <FallingMeteorsBackground />

      {/* Hero section showcasing main content */}
      <Hero />

      {/* Hero display section for background image */}
      <HeroDisplay />

      {/* Animated moving brands */}
      {/* <MovingBrands /> */}
      <MovingBrands />
      <ExplosiveText />
    </div>
  );
};

export default Body;
