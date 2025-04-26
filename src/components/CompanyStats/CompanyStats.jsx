import React from "react";
import { stats } from "../API";
import CompanyStatsCard from "./CompanyStatsCard";

const CompanyStats = () => {
  return (
    <div className="bg-gray-900 py-10 px-4 md:px-10 text-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="w-full md:w-1/4 hover:-translate-y-3 ease-in-out transition duration-300 "
          >
            <CompanyStatsCard stat={stat} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyStats;
