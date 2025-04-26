import React from "react";

const OurProcessCard = ({ step }) => {
  return (
    <div
      data-aos="fade-up"
      className="p-4 rounded-xl bg-gray-900"
    >
      {/* Stroke Text */}
      <div
        className="text-5xl md:text-6xl font-extrabold"
        style={{
          WebkitTextStroke: "1px yellow",
          color: "transparent",
        }}
      >
        {step.id}
      </div>

      {/* Title and Description */}
      <div className="mt-3">
        <h3 className="text-lg md:text-xl font-semibold text-white">
          {step.title}
        </h3>
        <p className="text-sm md:text-base text-gray-400 mt-1">
          {step.description}
        </p>
      </div>
    </div>
  );
};

export default OurProcessCard;
