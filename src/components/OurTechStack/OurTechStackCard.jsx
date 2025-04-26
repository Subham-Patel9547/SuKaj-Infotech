import React from "react";
// import { frontendTech } from "../API";

const OurTechStackCard = ({ tech }) => {
  return (
    <div
      data-aos="fade-down"
      className="
              size-38 md:size-48 flex justify-center items-center 
              shadow-white/20 shadow-2xl bg-black/30 backdrop-blur-md 
              rounded-xl rotate-[45deg] 
              
              group/card"
    >
      <div className="flex flex-col justify-center items-center gap-3 p-3 -rotate-[45deg]">
        <h1 className="text-5xl md:text-7xl regularColor">
          {React.createElement(tech.icon)}
        </h1>
        <span className="text-xl md:2xl font-bold activeYellow">
          {tech.name}
        </span>
      </div>
    </div>
  );
};

export default OurTechStackCard;
