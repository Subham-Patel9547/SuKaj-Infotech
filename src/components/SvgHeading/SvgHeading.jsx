import React from "react";

const SvgHeading = ({ heading, textColor = "activeYellow" }) => {
  return (
    <div data-aos="fade-up" className="max-w-5xl mx-auto text-center">
      <div className="relative inline-block">
        <h2
          className={`text-3xl md:text-5xl font-bold  mb-4 z-10 relative ${textColor}`}
        >
          {heading}
        </h2>
        {/* SVG Underline */}
        <svg
          className="absolute bottom-0 left-0 w-full h-3"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <path
            d="M0,10 C25,0 75,0 100,10"
            stroke="#facc15"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default SvgHeading;
