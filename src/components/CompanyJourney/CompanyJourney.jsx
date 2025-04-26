import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SvgHeading from "../SvgHeading/SvgHeading";

const CompanyJourney = () => {
  const navigate = useNavigate();
  

  return (
    <div className="bg-gray-900 pt-10 px-6 md:px-10">
      {/* Section Heading */}
      <SvgHeading heading="OUR JOURNEY SO FAR" />

      {/* Content Container */}
      <div className="flex flex-col md:flex-row mt-10 justify-center gap-5">
        {/* Left Side: Image */}
        <div data-aos="fade-up" className="md:w-1/2 rounded-2xl">
          <img
            src="/IMAGES/At-work-bro.svg"
            alt="SuKaj Infotech Journey"
            className="rounded-2xl size-full cursor-pointer transform transition duration-300 scale-102 hover:scale-105"
          />
        </div>

        {/* Right Side: Text Content */}
        <div
          data-aos="fade-down"
          className="md:w-1/2 text-gray-200 text-lg space-y-4 "
        >
          {/* Subheading */}
          <h3 className="text-xl md:text-6xl text-gray-300 font-bold italic mb-2">
            A Successful History
          </h3>

          {/* Tagline */}
          <p className="text-gray-400 text-lg mb-6 font-medium">
            A Brief History About Our Company
          </p>

          {/* Paragraph 1 */}
          <p>
            <strong>SuKaj Infotech</strong> is a growing and innovative IT
            solutions company based in Prayagraj, India. Since our inception, we
            have been committed to delivering exceptional web and mobile
            solutions tailored to meet diverse client needs.
          </p>

          {/* Service List */}
          <ul className="list-disc list-inside">
            <li>Custom Website Development</li>
            <li>eCommerce Website Solutions</li>
            <li>Web Application Development</li>
            <li>Mobile App & Game Development</li>
          </ul>

          {/* Paragraph 2 */}
          <p>
            At SuKaj Infotech, we combine creativity, cutting-edge technologies,
            and a passion for problem-solving to empower businesses in the
            digital age.
          </p>

          {/* Read More Button */}
          <button
            onClick={() => navigate("/about")}
            className="px-10 py-3 font-bold text-xl hover:scale-105 cursor-pointer bg-yellow-100 text-green-600 rounded-2xl my-5 hover:bg-green-600 hover:text-yellow-100 transition duration-300 ease-in-out"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyJourney;
