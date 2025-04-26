import React from "react";

const WhyChooseUsCard = ({ feature }) => {
  return (
    <div
      data-aos="fade-up"
      className=" p-6 h-full z-10 bg-gray-900 rounded-xl border border-gray-700 "
    >
      <div className="flex items-center justify-start mb-4 text-yellow-400">
        {React.createElement(feature.icon, { size: 32 })}
      </div>
      <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-300">{feature.description}</p>
    </div>
  );
};

export default WhyChooseUsCard;
