import React from "react";

const OurServicesCard = ({ service }) => {
  return (
    <div
      data-aos="fade-right"
      className="flex flex-col items-start bg-gray-800 p-6 rounded-xl"
    >
      <h1 className="text-4xl md:text-5xl my-2 font-bold activeYellow transition-transform duration-300 group-hover:scale-110">
        {React.createElement(service.icon)}
      </h1>
      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-200">
        {service.title}
      </h3>
      <p className="text-sm md:text-base text-gray-300">
        {service.description}
      </p>
    </div>
  );
};

export default OurServicesCard;
