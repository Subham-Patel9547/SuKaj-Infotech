import React from "react";

const GoogleMapEmbed = () => {
  return (
    <div className="w-full px-3 py-3 bg-gray-950 overflow-hidden">
      <div className="w-full max-w-screen-xl mx-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14403.444957393891!2d82.03709527558247!3d25.509673906164554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aad8edda886a7%3A0x34c18e8526702b31!2sAata%2C%20Uttar%20Pradesh%20212404!5e0!3m2!1sen!2sin!4v1745648698216!5m2!1sen!2sin"
          className="border-0 w-full h-full rounded-2xl"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map of Aata, Uttar Pradesh"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMapEmbed;
