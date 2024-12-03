"use client";

// Import necessary dependencies
import { motion } from "framer-motion";
import React, { useCallback, useState } from "react";

/**
 * MacBookKeyboard Component
 *
 * This component renders an interactive visual representation of a MacBook keyboard.
 * It uses Framer Motion for animations and React hooks for state management.
 */
const MacBookKeyboard = () => {
  // State to manage the glow effect
  const [glow, setGlow] = useState("0px 0px 0px 2px rgba(255, 255, 255, 0.2)");

  // Callback to handle mouse over event
  const handleMouseOver = useCallback(() => {
    return setGlow("0px 0px 10px 2.5px rgba(255, 255, 255, 0.2)");
  }, []);

  // Callback to handle mouse leave event
  const handleMouseLeave = useCallback(() => {
    return setGlow("0px 0px 0px 2px rgba(255, 255, 255, 0.0)");
  }, []);

  return (
    // Main container for the keyboard
    <motion.div
      className="flex items-center justify-center w-[460px] h-[200px] rounded-b-[12px] bg-gradient-to-t from-white to-black text-white overflow-hidden"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      transition={{
        ease: [0.42, 0, 0.58, 1], // Custom cubic bezier for smoother easing
        duration: 0.6, // Slower animation duration
      }}
      style={{
        boxShadow: glow,
        transition: "box-shadow 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
      }}
    >
      {/* Inner container for the keyboard layout */}
      <div className="flex flex-col items-center justify-center w-[459px] h-[200px] rounded-b-[12px] bg-black text-white overflow-hidden relative bottom-[0.5px]">
        <div className="flex w-[450px] h-[160px] justify-center">
          <div className="flex flex-col items-center justify-center w-[410px] h-full gap-[6px]">
            {/* Top row of the keyboard */}
            <div className="flex justify-center items-center w-[408.5px] h-[17px] bg-gradient-to-t from-[#ffffff10] to-black overflow-hidden rounded-b-[2px]">
              <div className="flex justify-center items-center w-[409px] h-[16px] bg-black relative bottom-[0.5px]  rounded-b-[2px]"></div>
            </div>

            {/* Function key row */}
            <div className="flex items-center gap-[3px]">
              {Array.from({ length: 14 }).map((item, idx) => {
                return idx < 13 ? (
                  // Regular function key
                  <motion.div
                    className="flex items-center justify-center w-[25px] h-[25px] bg-gradient-to-t from-[#ffffff20] to-black rounded-[3px]"
                    key={idx}
                    whileHover={{
                      background: "linear-gradient(to top, #00B7FF65, #000000)",
                    }}
                    transition={{
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      className="flex items-center justify-center w-[23.5px] h-[24px] bg-black rounded-[3px] relative bottom-[0.5px]"
                      whileHover={{
                        backgroundColor: "#121212",
                      }}
                      transition={{
                        ease: "easeInOut",
                      }}
                    ></motion.div>
                  </motion.div>
                ) : (
                  // Wider delete key
                  <motion.div
                    className="flex items-center justify-center w-[45px] h-[25px] bg-gradient-to-t from-[#ffffff20] to-black rounded-[3px]"
                    key={idx}
                    whileHover={{
                      background: "linear-gradient(to top, #00B7FF65, #000000)",
                    }}
                    transition={{
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      className="flex items-center justify-center w-[43.5px] h-[24px] bg-black rounded-[3px] relative bottom-[0.5px]"
                      whileHover={{
                        backgroundColor: "#121212",
                      }}
                      transition={{
                        ease: "easeInOut",
                      }}
                    ></motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Number key row */}
            <div className="flex items-center gap-[3px]">
              {Array.from({ length: 14 }).map((item, idx) => {
                return idx != 0 ? (
                  // Regular number key
                  <motion.div
                    className="flex items-center justify-center w-[25px] h-[25px] bg-gradient-to-t from-[#ffffff40] to-black rounded-[3px]"
                    key={idx}
                    whileHover={{
                      background: "linear-gradient(to top, #00B7FF65, #000000)",
                    }}
                    transition={{
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      className="flex items-center justify-center w-[23.5px] h-[24px] bg-black rounded-[3px] relative bottom-[0.5px]"
                      whileHover={{
                        backgroundColor: "#121212",
                      }}
                      transition={{
                        ease: "easeInOut",
                      }}
                    ></motion.div>
                  </motion.div>
                ) : (
                  // Wider tab key
                  <motion.div
                    className="flex items-center justify-center w-[45px] h-[25px] bg-gradient-to-t from-[#ffffff40] to-black rounded-[3px]"
                    key={idx}
                    whileHover={{
                      background: "linear-gradient(to top, #00B7FF65, #000000)",
                    }}
                    transition={{
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      className="flex items-center justify-center w-[43.5px] h-[24px] bg-black rounded-[3px] relative bottom-[0.5px]"
                      whileHover={{
                        backgroundColor: "#121212",
                      }}
                      transition={{
                        ease: "easeInOut",
                      }}
                    ></motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* QWERTY row */}
            <div className="flex items-center gap-[3px]">
              {Array.from({ length: 11 }).map((item, idx) => {
                return idx != 0 ? (
                  // Regular letter key
                  <motion.div
                    className="flex items-center justify-center w-[25px] h-[25px] bg-gradient-to-t from-[#ffffff60] to-black rounded-[3px]"
                    key={idx}
                    whileHover={{
                      background: "linear-gradient(to top, #00B7FF65, #000000)",
                    }}
                    transition={{
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      className="flex items-center justify-center w-[23.5px] h-[24px] bg-black rounded-[3px] relative bottom-[0.5px]"
                      whileHover={{
                        backgroundColor: "#121212",
                      }}
                      transition={{
                        ease: "easeInOut",
                      }}
                    ></motion.div>
                  </motion.div>
                ) : (
                  // Wider caps lock key
                  <motion.div
                    className="flex items-center justify-center w-[61px] h-[25px] bg-gradient-to-t from-[#ffffff60] to-black rounded-[3px]"
                    key={idx}
                    whileHover={{
                      background: "linear-gradient(to top, #00B7FF65, #000000)",
                    }}
                    transition={{
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      className="flex items-center justify-center w-[59.5px] h-[24px] bg-black rounded-[3px] relative bottom-[0.5px]"
                      whileHover={{
                        backgroundColor: "#121212",
                      }}
                      transition={{
                        ease: "easeInOut",
                      }}
                    ></motion.div>
                  </motion.div>
                );
              })}
              {/* Enter key */}
              <motion.div
                className="flex items-center justify-center w-[61px] h-[25px] bg-gradient-to-t from-[#ffffff60] to-black rounded-[3px]"
                whileHover={{
                  background: "linear-gradient(to top, #00B7FF65, #000000)",
                }}
                transition={{
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="flex items-center justify-center w-[59.5px] h-[24px] bg-black rounded-[3px] relative bottom-[0.5px]"
                  whileHover={{
                    backgroundColor: "#121212",
                  }}
                  transition={{
                    ease: "easeInOut",
                  }}
                ></motion.div>
              </motion.div>
            </div>

            {/* Bottom row (including spacebar) */}
            <div className="flex items-center gap-[3px]">
              {Array.from({ length: 9 }).map((item, idx) => {
                return idx != 4 ? (
                  // Regular bottom row key
                  <motion.div
                    className="flex items-center justify-center w-[25px] h-[25px] bg-gradient-to-t from-[#fff8] to-black rounded-[3px]"
                    key={idx}
                    whileHover={{
                      background: "linear-gradient(to top, #00B7FF65, #000000)",
                    }}
                    transition={{
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      className="flex items-center justify-center w-[23.5px] h-[24px] bg-black rounded-[3px] relative bottom-[0.5px]"
                      whileHover={{
                        backgroundColor: "#121212",
                      }}
                      transition={{
                        ease: "easeInOut",
                      }}
                    ></motion.div>
                  </motion.div>
                ) : (
                  // Spacebar
                  <motion.div
                    className="flex items-center justify-center w-[155px] h-[25px] bg-gradient-to-t from-[#fff8] to-black rounded-[3px]"
                    key={idx}
                    whileHover={{
                      background: "linear-gradient(to top, #00B7FF65, #000000)",
                    }}
                    transition={{
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      className="flex items-center justify-center w-[153.5px] h-[24px] bg-black rounded-[3px] relative bottom-[0.5px]"
                      whileHover={{
                        backgroundColor: "#121212",
                      }}
                      transition={{
                        ease: "easeInOut",
                      }}
                    ></motion.div>
                  </motion.div>
                );
              })}
              {/* Last key in the bottom row */}
              <motion.div
                className="flex items-center justify-center w-[25px] h-[25px] bg-gradient-to-t from-[#fff8] to-black rounded-[3px]"
                whileHover={{
                  background: "linear-gradient(to top, #00B7FF65, #000000)",
                }}
                transition={{
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="flex items-center justify-center w-[23.5px] h-[24px] bg-black rounded-[3px] relative bottom-[0.5px]"
                  whileHover={{
                    backgroundColor: "#121212",
                  }}
                  transition={{
                    ease: "easeInOut",
                  }}
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* The Touchpad component  */}
        <div className="flex items-center justify-center w-[205px] h-[35px] relative top-[2px] bg-gradient-to-b from-white to-black rounded-t-[2px]">
          <div className="flex w-[204px] h-[34px] bg-black rounded-t-[2px]"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default MacBookKeyboard;
