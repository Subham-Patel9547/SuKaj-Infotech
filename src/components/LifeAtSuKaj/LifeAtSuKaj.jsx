// src/components/LifeAtSuKaj.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import SvgHeading from "../SvgHeading/SvgHeading";
import { ArrowRightCircle } from "lucide-react";

import { cardData } from "../API";
import LifeAtSuKajCard from "./LifeAtSuKajCard";

const LifeAtSuKaj = () => {
  return (
    <section className="bg-gray-900 py-16 px-6 text-center">
      <SvgHeading heading="Life at SuKaj Infotech" />
      <p data-aos="fade-up" className="text-lg text-gray-200 max-w-2xl mx-auto mt-5 mb-12">
        At SuKaj Infotech, work is more than just projects. It’s about creating
        innovative solutions in a collaborative and supportive environment.
      </p>

      <div className="flex flex-wrap gap-8 mb-12 justify-center">
        {cardData.map((card, index) => (
          <LifeAtSuKajCard key={index} card={card} />
        ))}
      </div>

      <div data-aos="fade-up" className="text-center">
        <h3 className="text-3xl font-semibold activeYellow mb-6">
          Join Our Team
        </h3>
        <p className="text-lg text-gray-400 mb-8">
          Ready to take the next step in your career? Join a team that’s focused
          on growth, creativity, and making an impact. Together, we achieve
          more!
        </p>
        <NavLink
          to="/careers"
          className="inline-flex items-center gap-2 bg-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300"
        >
          <ArrowRightCircle size={20} /> Explore Careers at SuKaj Infotech
        </NavLink>
      </div>
    </section>
  );
};

export default LifeAtSuKaj;
