import React from "react";
import Badge from "../essentials/Badge";
import Button from "../essentials/Button";
import DiscordButton from "../essentials/DiscordButton";
import { ParticlesComponent } from "../../../particles";
import GlowBackgroundContainer from "../essentials/GlowBackgroundContainer";
import ScreenContainer from "../essentials/ScreenContainer";

// Define the props for the Badge component
interface BadgeProps {
  width: number;
  icon: string;
  iconWidth: number;
  context: string;
  secondaryContext: string;
  position: number;
}

// Define the props for the Button component
interface ActionButtonProps {
  context: string;
  icon?: string;
}

// Hero component to encapsulate the main section of the application
const Hero: React.FC = () => (
  <div className="flex flex-col items-center w-full h-full">
    <CommunityBadge />
    <Banner />
    <GlowBackgroundContainer />
    <ScreenContainer />
  </div>
);

// CommunityBadge component to display the badge with community information
const CommunityBadge: React.FC = () => (
  <Badge
    width={285}
    icon="https://svgshare.com/i/1C5H.svg"
    iconWidth={17}
    context="3000 +"
    secondaryContext="Community Members"
    position={145}
  />
);

// Banner component to encapsulate the promotional content
const Banner: React.FC = () => (
  <div className="flex flex-col items-center relative top-[160px]">
    <Title />
    <Subtitle />
    <ActionButtons />
  </div>
);

// Title component to render the main heading
const Title: React.FC = () => (
  <h1
    className="text-[65px] font-jost"
    style={{
      background:
        "linear-gradient(to right, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.85) 38%, rgba(255, 255, 255, 0.85) 63%, rgba(255, 255, 255, 0.25) 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
    aria-label="Main title"
  >
    Build Everything You Dream About
  </h1>
);

// Subtitle component for additional descriptive text
const Subtitle: React.FC = () => (
  <h3 className="w-[419px] h-auto flex flex-wrap items-center text-center font-jostThin relative top-[15px] opacity-50">
    Bring your vision to life with a collection of expertly crafted components
    that empower you to build stunning, high-performance interfaces.
  </h3>
);

// ActionButtons component to render the main action buttons
const ActionButtons: React.FC = () => (
  <div className="flex items-center justify-center gap-[10px]">
    <Button
      width={120}
      height={40}
      background="orange"
      position={45}
      context="Get Started"
      aria-label="Get started with our services"
    />
    <DiscordButton
      position={45}
      icon="https://svgshare.com/i/1C6W.svg"
      context="Join our Discord"
      aria-label="Join our Discord community"
    />
  </div>
);

export default Hero;
