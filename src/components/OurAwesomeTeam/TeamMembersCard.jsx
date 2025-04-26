import React from "react";

const TeamMembersCard = ({ member }) => {
  return (
    <div
      data-aos="fade-up"
      className=" bg-gray-900 p-6 h-full rounded-2xl flex justify-center items-center flex-col shadow-lg"
    >
      <div className="w-32 h-32 mb-4 rounded-full overflow-hidden">
        <img src={member.image} alt={member.name} className=" object-cover" />
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-white text-center">
        {member.name}
      </h3>
      <p className="text-md text-yellow-400 font-medium mb-2 text-center">
        {member.title}
      </p>
      <p className="text-sm text-gray-300 text-center">{member.description}</p>
    </div>
  );
};

export default TeamMembersCard;
