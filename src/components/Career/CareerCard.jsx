import React from "react";
import { NavLink } from "react-router-dom";
const CareerCard = ({ job }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 max-w-sm w-full transform hover:-translate-y-2">
      <h3 className="text-2xl font-semibold regularColor mb-4">{job.title}</h3>
      <p className="text-gray-200 mb-4">{job.location}</p>
      <p className="text-gray-300 mb-4">{job.description}</p>
      <h4 className="font-semibold text-start text-lg regularColor mb-2">
        Required Skills:
      </h4>
      <ul className="list-disc pl-5 text-left text-gray-200 mb-0">
        {job.skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
      <div className="mt-10">
        <NavLink className="bg-gray-600 regularColor  px-20 md:px-30 py-3 rounded-full font-semibold hover:bg-gray-700 transition duration-300">
          Apply Now
        </NavLink>
      </div>
    </div>
  );
};

export default CareerCard;
