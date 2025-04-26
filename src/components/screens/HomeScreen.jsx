import React from "react";

import { Typewriter } from "react-simple-typewriter";
import CompanyJourney from "../CompanyJourney/CompanyJourney";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import OurProcess from "../OurProcess/OurProcess";
import OurServices from "../OurServices/OurServices";
import CompanyStats from "../CompanyStats/CompanyStats";
import OurAwesomeTeam from "../OurAwesomeTeam/OurAwesomeTeam";
import ContactSection from "../ContactSection/ContactSection";
import ClientSays from "../ClientSays/ClientSays";
import GoogleMapEmbed from "../GoogleMapEmbed/GoogleMapEmbed";

const HomeScreen = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 h-full w-full object-cover"
        >
          <source src="./Videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 h-full w-full bg-black/80"></div>

        {/* Content */}
        <div className="h-full w-full relative z-10 px-2 md:mt-0 md:px-5 flex flex-col md:flex-row items-center  text-white">
          {/* Left Content */}
          <div data-aos="fade-left" className="h-auto w-full md:mt-5 md:w-2/3">
            {" "}
            <h1
              className="text-3xl md:text-6xl font-bold"
              style={{
                WebkitTextStroke: "1px yellow",
                color: "transparent",
              }}
            >
              We Build Your Imagination!
            </h1>
            <p className="mt-2 text-lg md:text-2xl activeYellow">
              It's Time to Transform Your Business Idea Into a Thriving Digital
              Reality.
            </p>
            <p className="text-lg activeYellow">
              Get a Free Consultation From Our Industry Experts Today!
            </p>{" "}
            <h1 className="mt-2 text-2xl md:text-3xl font-bold activeYellow">
              Next-Gen Solutions For{" "}
              <span className="block md:inline text-xl md:text-2xl font-bold regularColor">
                <Typewriter
                  words={[
                    "Mobile App & Web Development",
                    "Web Designing",
                    "Ecommerce Solutions",
                    "Graphic & UI/UX Designing",
                    "Digital Marketing",
                    "Hardware & IoT Integration",
                    "AI & Machine Learning",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="."
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>
            {/* Arrows */}
            <img
              src="./IMAGES/slider-arrow-1.svg"
              alt="arrow"
              className="developer-image md:ml-96 md:left-50  md:bottom-22 z-10 -bottom-96  absolute"
            />
            <img
              src="./IMAGES/slider-arrow-2.svg"
              alt="Arrow"
              className="designer-image md:bottom-10 -bottom-60 z-10 right-0 md:left-70 absolute"
            />
            {/* Description */}
            <p className="my-2 md:my-5 text-lg md:text-2xl">
              We deliver customized IT services designed to elevate your brand
              and drive meaningful results.
            </p>
            {/* Button */}
            <button className="my-2 px-7 py-3 rounded-3xl text-xl cursor-pointer font-bold buttonBg">
              Explore Our Services
            </button>
            {/* Decorative Shapes */}
            <div className="md:flex gap-5 mt-4 w-full justify-around hidden">
              <img
                src="./IMAGES/shape-09.png"
                alt="shape"
                className="developer-image"
              />
              <img
                src="./IMAGES/shape-05.png"
                alt="shape"
                className="designer-image"
              />
            </div>
          </div>

          {/* Right Image */}
          <div
            data-aos="fade-right"
            className="h-full w-full rounded-2xl md:w-1/3 flex justify-center items-center overflow-hidden"
            style={{
              boxShadow: "inset 0px 0px 20px 40px black",
            }}
          >
            {" "}
            <img
              src="./IMAGES/img103.jpeg"
              alt="img107"
              className="md:w-full opacity-75  rounded-2xl object-cover cursor-pointer transform transition duration-300 scale-102 hover:scale-105 shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Company-Journey*/}
      <div>
        <CompanyJourney />
      </div>

      {/* Why-ChooseUs */}
      <WhyChooseUs />

      {/* Our-services */}
      <OurServices />

      {/* Our-process */}
      <OurProcess />

      {/* Company-stats */}
      <CompanyStats />

      {/* Our-awesome-team */}
      <OurAwesomeTeam />

      {/* Contact-section */}
      <ContactSection />

      {/* Client-says */}
      <ClientSays />

      {/* Google-map-embed */}
      <GoogleMapEmbed />
    </>
  );
};

export default HomeScreen;
