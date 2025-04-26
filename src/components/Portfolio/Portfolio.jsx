import React from "react";
import SvgHeading from "../SvgHeading/SvgHeading";
import ClientSays from "../ClientSays/ClientSays";
import AllProjects from "../AllProjects/AllProjects";

const Portfolio = () => {
  return (
    <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 text-center">
      <SvgHeading heading="Our Portfolio" />
      <p
        data-aos="fade-up"
        className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto mb-12"
      >
        Explore our past projects that showcase our expertise in delivering
        high-quality, innovative, and responsive web and mobile applications.
      </p>

      {/* ALL Projects */}
      <AllProjects />

      {/* what client say */}
      <div className="my-10">
        <ClientSays />
      </div>
    </div>
  );
};

export default Portfolio;
