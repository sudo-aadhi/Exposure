import React from "react";
import DotBackground from "../layouts/DotBackgrounds";

const MaximizeCode = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-center items-center w-[585px] h-[355px] bg-gradient-to-b from-[#2e2e2e] to-[#121212] rounded-[27px]">
        <div
          className="top-[70px] opacity-50"
          style={{
            width: "500px",
            height: "50px",
            backgroundColor: "#DCA91F",
            position: "absolute",
            boxShadow: "0 0 800px 55px #6A4CFF",
          }}
        ></div>
        <div className="flex justify-center items-center w-[582px] h-[352px] bg-black rounded-[27px]">
          <DotBackground
            width="1192"
            height="275"
            dotOpacity={0.2}
            dotSize={0.7}
            dotSpacing={12}
            borderRadius={27}
          ></DotBackground>
        </div>
      </div>
    </div>
  );
};

export default MaximizeCode;
