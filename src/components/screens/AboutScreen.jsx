import React from "react";
import { IoStar } from "react-icons/io5";
import FounderMessage from "../FounderMessage/FounderMessage";
import WhatDrivesUs from "../WhatDrivesUs/WhatDrivesUs.JSX";
import OurTechStack from "../OurTechStack/OurTechStack";
import ClientSays from "../ClientSays/ClientSays";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
const AboutScreen = () => {
  return (
    // Main container with gradient background and full screen height
    <div className="w-full min-h-screen  bg-[linear-gradient(117deg,_rgba(42,123,155,0.62)_0%,_rgba(87,199,133,0.2)_50%,_rgba(111,237,83,0.19)_100%)] relative overflow-hidden">
      {/* Company Title */}
      <div
        data-aos="fade-down"
        className="w-full bg-green-950/50 py-2 md:py-10 flex flex-col justify-center items-center gap-3"
      >
        {/* company welcome heading */}
        <div>
          <h1 className="text-3xl md:text-4xl text-center font-bold">
            Welcome to{" "}
            <span className="relative font-extrabold block md:inline text-yellow-400 pb-2">
              Sukaj Infotech
              <svg
                className="absolute left-0 bottom-0 w-full h-2"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,10 C25,0 75,0 100,10"
                  stroke="#facc15"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>{" "}
            Private Limited.
          </h1>
        </div>

        {/* Decorative Banner Design with Text */}
        <div className="flex gap-1 items-center">
          <IoStar className="text-2xl" />
          <p className="text-yellow-300 underline text-lg font-semibold">
            GET TO KNOW US
          </p>
          <IoStar className="text-2xl" />
        </div>

        {/* Introduction Paragraphs */}
        <div className="max-w-3xl text-center">
          <p className="text-lg md:text-xl leading-relaxed ">
            Outsourcing development can often be expensive and challenging.
            <br className="hidden md:block" />
            At <strong>SuKaj Infotech</strong>, we make it seamless and
            efficient.
          </p>
        </div>

        {/* founded section */}
        <div className="max-w-4xl text-center">
          <p className="text-lg md:text-xl leading-relaxed ">
            Founded by <strong>Subham Patel</strong>, an Indian developer with
            10+ years of experience in the U.S., SuKaj Infotech is powered by{" "}
            <strong>40+ skilled professionals</strong> delivering top-tier
            solutions across frameworks.
            <br />
            <strong className="text-blue-100">
              Our clients' success is our top priority.
            </strong>
          </p>
        </div>
      </div>

      {/* Floating Decorative Images (only on medium+ screens) */}
      <img
        src="/IMAGES/about-banner1.png"
        alt="about-banner1"
        className="hidden md:block absolute left-5 top-10 w-32 h-32 bg-white rounded-full"
      />
      <img
        src="/IMAGES/about-banner2.png"
        alt="about-banner2"
        className="hidden md:block absolute right-10 bottom-2 w-32 h-32 bg-white rounded-full"
      />

      {/* Vision and Mission Statements */}
      <WhatDrivesUs />

      {/* Founder Message */}
      <FounderMessage />

      {/* Tech Stack */}
      <OurTechStack />

      {/* why choose us */}
      <WhyChooseUs />

      {/* Client Testimonial */}
      <ClientSays />
    </div>
  );
};

export default AboutScreen;
