import React from "react";
import { NavLink } from "react-router-dom";

const AllProjectsCard = ({ item, index }) => {
  return (
    <div data-aos="fade-up" className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 w-full sm:w-[300px] md:w-[350px]">
      {/* Image Container with overflow hidden image scroll up down */}
      <div className="w-full h-58 inner-shadow overflow-hidden rounded-xl mb-4 relative">
        <img
          src={item.image}
          alt={item.title}
          className={`w-full h-auto inner-shadow ${
            index % 2 === 0
              ? "animate-vertical-scroll-down"
              : "animate-vertical-scroll-up"
          }`}
        />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
      <p className="text-gray-300 mb-4">{item.description}</p>
      <NavLink
        to="/coming-soon"
        className="block text-center bg-gray-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-700 transition duration-300"
      >
        View Project →
      </NavLink>
    </div>
  );
};

export default AllProjectsCard;
