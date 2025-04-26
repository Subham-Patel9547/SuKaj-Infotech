import React from "react";

const ClientTestimonialsCard = ({ client }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-gray-950 p-6 rounded-xl shadow-md max-w-sm text-left flex flex-col items-start hover:shadow-gray-700 hover:shadow-sm hover:transition-transform-y-2 transition duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={client.image}
          alt={client.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold regularColor text-lg">{client.name}</h3>
          <p className="text-sm text-gray-300">{client.company}</p>
        </div>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">
        <span className="activeYellow sm">“</span>
        {client.feedback}
        <span className="activeYellow">”</span>
      </p>
    </div>
  );
};

export default ClientTestimonialsCard;
