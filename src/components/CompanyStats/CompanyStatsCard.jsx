import React from "react";

const CompanyStatsCard = ({ stat }) => {
  return (
    <div
      data-aos="fade-right"
      className="bg-gray-800 pl-5 pr-15  py-6 rounded-2xl"
    >
      <div className="text-yellow-400 mb-4">
        {React.createElement(stat.icon, { size: 48 })}
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-white py-1 mb-2">
        {stat.number}
      </h3>
      <p className="text-2xl md:text-xl text-gray-400">{stat.label}</p>
    </div>
  );
};

export default CompanyStatsCard;
