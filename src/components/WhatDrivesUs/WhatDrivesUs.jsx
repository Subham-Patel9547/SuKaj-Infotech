import React from "react";
import WhatDrivesUsCard from "./WhatDrivesUsCard";
import SvgHeading from "../SvgHeading/SvgHeading";

const WhatDrivesUs = () => {
  return (
    <div className="py-12 px-4 bg-black/45 backdrop-blur-md">
      <div className="max-w-6xl mx-auto text-center mb-12">
        {/* <h2 className="text-4xl font-bold text-rose-200">What Drives Us</h2> */}
        <SvgHeading heading="What Drive Us" textColor="activeYellow" />
        <p data-aos="fade-right" className="text-yellow-200 mt-2">
          Explore the core beliefs that shape SuKaj Infotech
        </p>
      </div>
      <div>
        <WhatDrivesUsCard />
      </div>
    </div>
  );
};

export default WhatDrivesUs;
