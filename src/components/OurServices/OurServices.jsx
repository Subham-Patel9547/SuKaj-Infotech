import React, { useEffect } from "react";
import { services } from "../API";
import OurServicesCard from "./OurServicesCard";
import SvgHeading from "../SvgHeading/SvgHeading";

const OurServices = () => {
  return (
    <div className="w-full py-16 px-4 md:px-10 bg-gray-900 text-gray-300 overflow-x-hidden">
      {/* Section Header */}
      <SvgHeading heading="Our Services" />
      {/* Services Flexbox Layout */}
      <div className="flex flex-col mt-10 md:flex-row md:flex-wrap gap-8 justify-center max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="w-full md:w-[47%] hover:shadow-md hover:-translate-y-3 ease-in-out transition duration-300 ">
            <OurServicesCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
