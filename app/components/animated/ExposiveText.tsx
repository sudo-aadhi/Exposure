"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const FadeInOpacityVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5, // Smooth fade-in over 1.5 seconds
      delay: 1, // Add a slight delay for timing alignment
      ease: [0.22, 0.61, 0.36, 1], // Cubic-bezier easing for fluid motion
    },
  },
};

const animatedProp = [
  {
    node: "It can take notes.",
    ref: "https://www.raycast.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fraycast-notes.d46cb687.png&w=1080&q=90",
    index: 0,
  },
  {
    node: "Track your flights.",
    ref: "https://www.raycast.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fflight-tracker.41d98c94.png&w=1080&q=90",
    index: 1,
  },
  {
    node: "Convert anything.",
    ref: "https://www.raycast.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcalculator.d0b6fc01.png&w=1080&q=90",
    index: 2,
  },
  {
    node: "Search files.",
    ref: "https://www.raycast.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffile-search.cc18c68b.png&w=1080&q=90",
    index: 3,
  },
  {
    node: "Run scripts.",
    ref: "https://www.raycast.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscript-commands.9e5497a7.png&w=1080&q=90",
    index: 4,
  },
  {
    node: "Manage your windows.",
    ref: "https://www.raycast.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freminders.68fbffbc.png&w=1080&q=90",
    index: 5,
  },
  {
    node: "Plan your day.",
    ref: "https://www.raycast.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fschedule.ff46670c.png&w=1080&q=90",
    index: 6,
  },
  {
    node: "Remind you of stuff.",
    ref: "https://www.raycast.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freminders.68fbffbc.png&w=1080&q=90",
    index: 7,
  },
  {
    node: "Translate into any language.",
    ref: "https://www.raycast.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftranslator.5ac0ae60.png&w=1080&q=90",
    index: 8,
  },
  {
    node: "Insert Emojis.",
    ref: "https://www.raycast.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Femoji-picker.fd3ad392.png&w=1080&q=90",
    index: 9,
  },
  {
    node: "Find text in screenshots.",
    ref: "https://www.raycast.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreenshot-search.bf4d4d93.png&w=1080&q=90",
    index: 10,
  },
];

const ExplosiveText = () => {
  const [previewIndex, setPreviewIndex] = useState(0);

  return (
    <motion.div className="flex items-center justify-evenly w-[1200px] h-[537px] overflow-hidden gap-[200px] relative top-[360px]">
      <AnimatedRevealEffect
        context="What else can Raycast do?"
        obj={animatedProp}
        setPreviewIndex={setPreviewIndex}
      />
      <AnimatedPreview previewIndex={previewIndex} />
    </motion.div>
  );
};

interface AnimatedRevealProps {
  context: string;
  obj: Array<{ node: string; ref: string; index: number }>;
  setPreviewIndex: React.Dispatch<React.SetStateAction<number>>;
}

const AnimatedRevealEffect: React.FC<AnimatedRevealProps> = ({
  context,
  obj,
  setPreviewIndex,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const words = context.split(" ");

  useEffect(() => {
    setPreviewIndex(0);
  }, []);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    setPreviewIndex(index);
  };

  return (
    <motion.div
      className="flex flex-col flex-wrap w-[400px] h-auto max-h-[450px] overflow-hidden"
      variants={FadeInOpacityVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="flex flex-wrap ml-3">
        {words.map((word, idx) => (
          <motion.h2
            key={idx}
            className={`text-[23px] font-medium ${
              idx !== 0 && `ml-[6px] font-inter font-thin`
            }`}
            initial={{
              opacity: 0,
              y: 5,
              filter: "blur(3px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1, // Smooth fade
              delay: 0.12 * idx,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true }}
          >
            {word}
          </motion.h2>
        ))}
      </div>
      <div className="flex flex-wrap w-full gap-[5px] ml-3">
        {obj.map((item, idx) => (
          <motion.div
            className="flex"
            key={idx}
            initial={{
              opacity: 0,
              y: 10,
              boxShadow: "0 0 3px rgba(255, 255, 255, 0.7)",
              filter: "blur(40px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              boxShadow: "0 0 0px rgba(255, 255, 255, 0.0)",
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.2,
              delay: 0.2 * idx,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
          >
            <h2
              className={`font-inter font-thin text-[23px] text-white cursor-pointer transition-all duration-500 ease-in-out ${
                idx === activeIndex ? "opacity-100" : "opacity-30"
              } hover:opacity-60`}
              style={{
                textShadow:
                  idx === activeIndex
                    ? "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)"
                    : "0 0 5px rgba(255, 255, 255, 0.3)",
                transition:
                  "text-shadow 0.5s ease-in-out, opacity 0.5s ease-in-out, filter 0.5s ease-in-out",
              }}
              onClick={() => handleClick(item.index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleClick(item.index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-pressed={idx === activeIndex}
            >
              {item.node}
            </h2>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const AnimatedPreview = ({ previewIndex }: { previewIndex: number }) => {
  const FadeInOpacityPreviewVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        delay: 1.2,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };
  return (
    <motion.div
      className="flex items-center justify-center w-[480px] h-[360px]"
      variants={FadeInOpacityPreviewVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <Image
        src={animatedProp[previewIndex].ref}
        alt={animatedProp[previewIndex].node}
        className="rounded-xl shadow-lg"
        width={480}
        height={360}
      />
    </motion.div>
  );
};

export default ExplosiveText;
