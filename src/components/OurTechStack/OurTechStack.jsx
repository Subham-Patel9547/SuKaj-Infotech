import React from "react";
import OurTechStackCard from "./OurTechStackCard";
import { backendTech, frontendTech, mobileTech } from "../API";
import SvgHeading from "../SvgHeading/SvgHeading";

const OurTechStack = () => {
  return (
    <div className="w-full p-2 text-center bg-gray-900 py-10 px-5">
      <SvgHeading heading="Our Tech Stack" textColor="activeYellow" />
      {/* frontendTech */}
      <h1
        data-aos="fade-up"
        className="text-3xl md:text-4xl mb-16 mt-5 regularColor underline font-extrabold"
      >
        Frontend-Tech
      </h1>
      <div
        data-aos="fade-right"
        className="flex flex-wrap justify-around items-center px-5"
      >
        {frontendTech.map((tech, index) => (
          <div
            key={index}
            className="hover:-translate-y-3 ease-in-out transition duration-300"
          >
            <OurTechStackCard tech={tech} />
          </div>
        ))}
      </div>

      {/* backendTech */}
      <h1
        data-aos="fade-up"
        className="text-3xl md:text-4xl my-14 activeYellow underline font-extrabold"
      >
        Backend-Tech
      </h1>
      <div className="flex flex-wrap justify-around items-center px-5">
        {backendTech.map((tech, index) => (
          <div
            key={index}
            className="hover:-translate-y-3 ease-in-out transition duration-300"
          >
            <OurTechStackCard tech={tech} />
          </div>
        ))}
      </div>

      {/* mobileTech */}
      <h1 className="text-3xl md:text-4xl my-14 regularColor underline font-extrabold">
        Mobile-Tech
      </h1>
      <div className="flex flex-wrap justify-around items-center px-5 mb-5">
        {mobileTech.map((tech, index) => (
          <div
            key={index}
            className="hover:-translate-y-3 ease-in-out transition duration-300"
          >
            <OurTechStackCard tech={tech} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTechStack;
