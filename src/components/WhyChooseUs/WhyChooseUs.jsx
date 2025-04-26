import React from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";
import { features } from "../API";
import SvgHeading from "../SvgHeading/SvgHeading";

const WhyChooseUs = () => {
  return (
    <section className="relative bg-gray-800 pt-10 pb-20 px-4 md:px-10 text-white overflow-hidden">
      <div className="relative max-w-6xl mx-auto text-center z-10">
        {/* content heading */}
        <SvgHeading heading="Why Choose Us?" />
        <div className="flex flex-col mt-10 md:flex-row md:flex-wrap gap-10 justify-center items-stretch">
          {features.map((feature, index) => (
            <div key={index} className="md:w-[45%] w-full hover:shadow-md hover:-translate-y-3 ease-in-out transition duration-300 ">
              <WhyChooseUsCard feature={feature} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom SVG Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24 opacity-10 z-0 rotate-180"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#00000"
          d="M0,64L60,96C120,128,240,192,360,192C480,192,600,128,720,122.7C840,117,960,171,1080,181.3C1200,192,1320,160,1380,144L1440,128V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"
        />
      </svg>
    </section>
  );
};

export default WhyChooseUs;
