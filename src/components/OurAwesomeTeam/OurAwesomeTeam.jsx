import React from "react";
import { teamMembers } from "../API";
import TeamMembersCard from "./teamMembersCard";
import SvgHeading from "../SvgHeading/SvgHeading";

const OurAwesomeTeam = () => {
  return (
    <div className="bg-gray-800 text-gray-100 py-16 px-4 md:px-10">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        {/* Content Heading */}
        <SvgHeading heading="Our Awesome Team" />
        <p
          data-aos="fade-right"
          className="text-gray-300 text-sm mt-8 md:text-lg max-w-3xl mx-auto"
        >
          Effective collaboration between developers and designers is key to
          delivering innovative and high-quality products. By aligning technical
          expertise with creative vision, our team ensures a seamless and
          impactful user experience.
        </p>
      </div>

      {/* Team Cards */}
      <div className="flex flex-wrap gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className=" w-full sm:w-[45%] lg:w-[22%]  hover:-translate-y-3 ease-in-out transition duration-300 "
          >
            <TeamMembersCard member={member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAwesomeTeam;
