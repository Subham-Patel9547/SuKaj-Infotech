import React from "react";
import { content } from "../API";

const WhatDrivesUsCard = () => {
  return (
    <div data-aos="fade-up">
      <div className="flex flex-wrap justify-center gap-8">
        {content.map((card, index) => (
          <div
            key={index}
            className="bg-black/10 w-full sm:w-[45%] lg:w-[30%] p-6 rounded-2xl shadow-sm shadow-white hover:shadow-md hover:-translate-y-3 ease-in-out transition duration-300 text-center"
          >
            <h1
              className={`text-4xl ${
                index === 0
                  ? "text-amber-200"
                  : index === 1
                  ? "text-green-800"
                  : "text-red-800"
              }`}
            >
              {React.createElement(card.icon)}
            </h1>
            <h3 className="text-2xl font-semibold text-gray-100 mb-3">
              {card.title}
            </h3>
            <p className="text-gray-200 leading-relaxed">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatDrivesUsCard;
