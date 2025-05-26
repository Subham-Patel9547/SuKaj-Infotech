import React from "react";

const WhyJoinUsCard = ({ perk }) => {
  return (
    <div>
      <div className="bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 text-left">
        <div className="mb-4">{React.createElement(perk.icon)}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{perk.title}</h3>
        <p className="text-gray-300 text-sm">{perk.description}</p>
      </div>
    </div>
  );
};

export default WhyJoinUsCard;
