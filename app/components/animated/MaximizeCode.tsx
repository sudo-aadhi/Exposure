import React from "react";

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
            boxShadow: "0 0 800px 50px #6A4CFF",
          }}
        ></div>
        <div className="flex justify-center items-center w-[582px] h-[352px] bg-black rounded-[27px]"></div>
      </div>
    </div>
  );
};

export default MaximizeCode;