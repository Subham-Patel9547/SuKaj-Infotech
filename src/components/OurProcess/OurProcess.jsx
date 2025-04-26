import React from "react";
import OurProcessCard from "./OurProcessCard";
import { processSteps } from "../API";
import SvgHeading from "../SvgHeading/SvgHeading";

const OurProcess = () => {
  return (
    <div className="py-16 px-3 md:px-20 bg-gray-800 text-gray-200">
      {/* Content Heading */}
      <SvgHeading heading="Our Process"/>
      <div className="flex flex-col mt-10 md:flex-row md:flex-wrap md:justify-center gap-10">
        {processSteps.map((step) => (
          <div
            key={step.id}
            className="flex items-start space-x-4 md:w-[45%] bg-gray-800 rounded-xl hover:shadow-md hover:-translate-y-3 ease-in-out transition duration-300 "
          >
            <OurProcessCard step={step} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProcess;
