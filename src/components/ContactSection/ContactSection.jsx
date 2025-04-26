import React from "react";
import SvgHeading from "../SvgHeading/SvgHeading";

const ContactSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <SvgHeading heading="Let's Work Together" />
        <p data-aos="fade-up" className="text-gray-300 mt-2 text-lg">
          Have a project in mind? Let's create something amazing.
        </p>
      </div>

      <form data-aos="fade-right" className="max-w-3xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        ></textarea>
        <button
          type="submit"
          className="w-full text-xl bg-yellow-200 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
