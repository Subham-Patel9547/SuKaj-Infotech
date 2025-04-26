import React from "react";
import SvgHeading from "../SvgHeading/SvgHeading";

const ClientSays = () => {
  return (
    <div className="relative w-full py-16 bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden">
      {/* Decorative Blob Background */}
      <svg
        className="absolute top-0 left-0 w-72 opacity-10 text-white"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M49.3,-61.5C63.6,-52.1,75.7,-37.4,76.7,-22.4C77.7,-7.5,67.6,7.6,58.7,23.4C49.9,39.2,42.2,55.6,29.2,63.5C16.1,71.4,-2.2,70.8,-17.6,64.2C-33.1,57.6,-45.6,44.9,-54.3,31.1C-63,17.3,-67.9,2.4,-65.5,-11.3C-63.2,-25.1,-53.6,-37.7,-42,-48.2C-30.4,-58.7,-15.2,-67.2,0.4,-67.7C16,-68.2,32,-60.9,49.3,-61.5Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Stars */}
      {[...Array(6)].map((_, i) => (
        <svg
          key={i}
          className={`absolute w-10 h-10 text-yellow-900 animate-pulse ${
            i % 2 === 0
              ? `top-[${10 + i * 5}%] left-[${15 + i * 10}%]`
              : `bottom-[${10 + i * 6}%] right-[${20 + i * 5}%]`
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l2.09 6.26L20 9.27l-5 3.73L16.18 20 12 16.9 7.82 20 9 13l-5-3.73 5.91-.91z" />
        </svg>
      ))}

      {/* Big Quote Marks */}
      <svg
        className="absolute top-10 left-10 w-16 h-16 text-yellow-400 opacity-20"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7.17 6C5.95 6 5 6.95 5 8.17v2.66C5 12.27 6.72 14 8.83 14H11V8.17C11 6.95 10.05 6 8.83 6H7.17zM16.17 6C14.95 6 14 6.95 14 8.17v2.66C14 12.27 15.72 14 17.83 14H20V8.17C20 6.95 19.05 6 17.83 6h-1.66z" />
      </svg>

      {/* Testimonial Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <SvgHeading heading="What Our Clients Say" textColor="activeYellow" />
        <blockquote
          data-aos="fade-up"
          className="text-lg mt-3 italic text-white leading-relaxed"
        >
          “SuKaj Infotech delivered our project on time with amazing quality.
          Communication was smooth throughout.”
        </blockquote>
        <p data-aos="fade-up" className="mt-4 font-semibold text-blue-300">
          — A Happy Client
        </p>
      </div>
    </div>
  );
};

export default ClientSays;
