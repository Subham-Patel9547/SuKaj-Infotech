import React from "react";
import SvgHeading from "../SvgHeading/SvgHeading";
import {
  CheckCircle,
  Code,
  Rocket,
  ShieldCheck,
  Clock,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const HireStaff = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-gray-800 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full text-center">
        <SvgHeading heading="Hire Top Talent from SuKaj Infotech" />
        <p data-aos="fade-up" className="text-lg text-gray-300 my-5">
          Whether you're looking to build a product, scale your team, or bring
          your vision to life — we've got skilled developers ready to join your
          mission.
        </p>

        <div
          data-aos="fade-down"
          className="flex flex-col md:flex-row gap-6 text-left mb-10"
        >
          {/* Technologies We Offer */}
          <div className="bg-gray-950 p-6 rounded-xl shadow-sm flex-1 hover:bg-gray-800">
            <h3 className="text-xl font-semibold mb-4 text-gray-200 flex items-center gap-2">
              <Code size={22} /> Technologies We Offer
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="regularColor" /> ReactJS /
                React Native
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="regularColor" /> Node.js /
                Express
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="regularColor" /> MongoDB /
                Firebase
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="regularColor" /> UI/UX Design
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="regularColor" /> Full-stack
                Solutions
              </li>
            </ul>
          </div>

          {/* Why Choose SuKaj */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-sm flex-1 hover:bg-gray-950">
            <h3 className="text-xl font-semibold mb-4 text-gray-200 flex items-center gap-2">
              <Rocket size={22} /> Why Choose SuKaj?
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <Users size={18} className="text-indigo-400" /> Dedicated &
                Experienced Developers
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-indigo-400" /> Flexible
                Hiring Models
              </li>
              <li className="flex items-center gap-2">
                <Clock size={18} className="text-indigo-400" /> On-time Delivery
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-indigo-400" />{" "}
                Confidentiality Assured
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-indigo-400" /> Ongoing
                Support
              </li>
            </ul>
          </div>
        </div>

        <div data-aos="fade-right">
          <NavLink
            href="mailto:hire@sukajinfotech.com?subject=Need to Hire Developers"
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
          >
            Request a Developer
          </NavLink>

          <p className="my-5 text-sm text-gray-500">
            Or reach out to us at{" "}
            <span className="font-medium">hire@sukajinfotech.com</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HireStaff;
