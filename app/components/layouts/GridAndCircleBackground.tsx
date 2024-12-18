"use client";
import { motion } from "framer-motion";

interface AnimatedRippleEffect {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  className?: string;
}

const AnimatedRippleEffect: React.FC<AnimatedRippleEffect> = ({
  mainCircleSize = 90,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className = "",
}) => {
  return (
    <div
      className={`pointer-events-none select-none absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent)] ${className}`}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
        const borderOpacity = 5 + i * 5;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#AD28FF] shadow-xl border"
            style={{
              width: size,
              height: size,
              opacity,
              borderStyle,
              borderWidth: 1,
              borderColor: `hsl(var(--foreground) / ${borderOpacity}%)`,
              top: "40.5%",
              left: "50%",
              boxShadow: "drop-shadow(0 0 15px rgba(255, 72, 14, 0.15))",
            }}
            initial={{ scale: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1 }}
            transition={{
              repeat: Infinity,
              duration: 4,
              delay: parseFloat(animationDelay),
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
};

const GridAndCircleBackground = () => {
  return (
    <>
      <AnimatedRippleEffect />
      <svg
        className="opacity-55"
        width="500"
        height="360"
        viewBox="0 0 500 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M249.489 0H250.511V360H249.489V0Z"
          fill="url(#paint0_radial_516_94)"
        />
        <path
          d="M274.037 0H275.06V360H274.037V0Z"
          fill="url(#paint1_radial_516_94)"
        />
        <path d="M4 0H5.02287V360H4V0Z" fill="url(#paint2_radial_516_94)" />
        <path
          d="M5.02287 220.909V219.886H496V220.909H5.02287Z"
          fill="url(#paint3_radial_516_94)"
        />
        <path
          d="M298.586 0H299.609V360H298.586V0Z"
          fill="url(#paint4_radial_516_94)"
        />
        <path
          d="M28.5489 0H29.5717V360H28.5489V0Z"
          fill="url(#paint5_radial_516_94)"
        />
        <path
          d="M4 197.386V196.364H496V197.386H4Z"
          fill="url(#paint6_radial_516_94)"
        />
        <path
          d="M323.135 0H324.158V360H323.135V0Z"
          fill="url(#paint7_radial_516_94)"
        />
        <path
          d="M53.0977 0H54.1206V360H53.0977V0Z"
          fill="url(#paint8_radial_516_94)"
        />
        <path
          d="M4 172.841V171.818H496V172.841H4Z"
          fill="url(#paint9_radial_516_94)"
        />
        <path
          d="M347.684 0H348.707V360H347.684V0Z"
          fill="url(#paint10_radial_516_94)"
        />
        <path
          d="M77.6466 0H78.6694V360H77.6466V0Z"
          fill="url(#paint11_radial_516_94)"
        />
        <path
          d="M4 148.295V147.273H496V148.295H4Z"
          fill="url(#paint12_radial_516_94)"
        />
        <path
          d="M372.233 0H373.256V360H372.233V0Z"
          fill="url(#paint13_radial_516_94)"
        />
        <path
          d="M102.195 0H103.218V360H102.195V0Z"
          fill="url(#paint14_radial_516_94)"
        />
        <path
          d="M5.02287 123.75V122.727H496V123.75H5.02287Z"
          fill="url(#paint15_radial_516_94)"
        />
        <path
          d="M396.782 0H397.805V360H396.782V0Z"
          fill="url(#paint16_radial_516_94)"
        />
        <path
          d="M126.744 0H127.767V360H126.744V0Z"
          fill="url(#paint17_radial_516_94)"
        />
        <path
          d="M5.02287 99.2045V98.1818H496V99.2045H5.02287Z"
          fill="url(#paint18_radial_516_94)"
        />
        <path
          d="M5.02287 342.614V341.591H496V342.614H5.02287Z"
          fill="url(#paint19_radial_516_94)"
        />
        <path
          d="M421.331 0H422.353V360H421.331V0Z"
          fill="url(#paint20_radial_516_94)"
        />
        <path
          d="M151.293 0H152.316V360H151.293V0Z"
          fill="url(#paint21_radial_516_94)"
        />
        <path
          d="M5.02287 74.6591V73.6364H496V74.6591H5.02287Z"
          fill="url(#paint22_radial_516_94)"
        />
        <path
          d="M5.02287 318.068V317.045H496V318.068H5.02287Z"
          fill="url(#paint23_radial_516_94)"
        />
        <path
          d="M445.879 0H446.902V360H445.879V0Z"
          fill="url(#paint24_radial_516_94)"
        />
        <path
          d="M175.842 0H176.865V360H175.842V0Z"
          fill="url(#paint25_radial_516_94)"
        />
        <path
          d="M4 50.1136V49.0909H496V50.1136H4Z"
          fill="url(#paint26_radial_516_94)"
        />
        <path
          d="M4 293.523V292.5H496V293.523H4Z"
          fill="url(#paint27_radial_516_94)"
        />
        <path
          d="M470.428 0H471.451V360H470.428V0Z"
          fill="url(#paint28_radial_516_94)"
        />
        <path
          d="M200.391 0H201.414V360H200.391V0Z"
          fill="url(#paint29_radial_516_94)"
        />
        <path
          d="M4 25.5682V24.5455H496V25.5682H4Z"
          fill="url(#paint30_radial_516_94)"
        />
        <path
          d="M4 268.977V267.955H496V268.977H4Z"
          fill="url(#paint31_radial_516_94)"
        />
        <path
          d="M494.977 0H496V360H494.977V0Z"
          fill="url(#paint32_radial_516_94)"
        />
        <path
          d="M224.94 0H225.963V360H224.94V0Z"
          fill="url(#paint33_radial_516_94)"
        />
        <path
          d="M4 1.02273V0H496V1.02273H4Z"
          fill="url(#paint34_radial_516_94)"
        />
        <path
          d="M4 244.432V243.409H496V244.432H4Z"
          fill="url(#paint35_radial_516_94)"
        />
        <rect x="187" y="121" width="127" height="127" rx="63.5" fill="black" />
        <rect
          x="187.5"
          y="121.5"
          width="126"
          height="126"
          rx="63"
          stroke="#141414"
          strokeOpacity="0.65"
        />
        <circle cx="250.5" cy="184.5" r="39" stroke="#141414" />
        <defs>
          <radialGradient
            id="paint0_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint2_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint3_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint4_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint5_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint6_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint7_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint8_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint9_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint10_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint11_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint12_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint13_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint14_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint15_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint16_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint17_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint18_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint19_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint20_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint21_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint22_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint23_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint24_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint25_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint26_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint27_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint28_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint29_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint30_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint31_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint32_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint33_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint34_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint35_radial_516_94"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 180) rotate(90) scale(180 172.631)"
          >
            <stop stopColor="#737373" stopOpacity="0.25" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </radialGradient>
          <linearGradient
            id="paint36_linear_516_94"
            x1="0"
            y1="185.5"
            x2="500"
            y2="185.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.5" stopColor="#CCCCCC" />
            <stop offset="1" stopColor="#999999" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default GridAndCircleBackground;
