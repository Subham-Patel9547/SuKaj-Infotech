import React from "react";

const LifeAtSuKajCard = ({ card }) => {
  const Icon = card.icon;

  return (
    <div data-aos="fade-up" className="w-full md:w-[30%] bg-gray-950 p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-800 transition duration-300">
      <div className="flex justify-center mb-4">
        <Icon size={40} className="text-yellow-400" />
      </div>
      <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
        {card.title}
      </h3>
      <p className="text-gray-200">{card.description}</p>
    </div>
  );
};

export default LifeAtSuKajCard;
