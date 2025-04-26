import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-400 text-lg font-semibold inline-block"
      : "hover:text-yellow-400 text-base transition duration-300 hover:translate-x-1 inline-block";

  return (
    <footer className=" w-full bg-gray-950 text-gray-300 pt-16 pb-8 px-3 md:px-20">
      <div className="w-full md:*:w-1/4 flex flex-col md:flex-row justify-around gap-8">
        {/* Vision & Social */}
        <div data-aos="fade-up">
          <img
            src="./IMAGES/logo.png"
            alt="SuKaj Infotech Logo"
            className="w-32 md:w-40 h-auto rounded-3xl mb-3 object-contain"
          />

          <p className="text-sm mb-4">
            Our vision is to be a true partner to your growth and establish
            ourselves as a major IT service provider in the competitive global
            marketplace.
          </p>
          <div className="flex gap-4 mt-4 text-yellow-400 text-2xl">
            <FaTwitter className="social-media" />
            <FaLinkedin className="social-media" />
            <FaFacebook className="social-media" />
            <FaInstagram className="social-media" />
          </div>
        </div>

        {/* Company Info */}
        <div data-aos="fade-down" className="flex flex-col ">
          <h3 className="regularColor text-xl font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/LifeAtSuKaj" className={navLinkClass}>
                Life@SuKaj Infotech
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/ClientTestimonials" className={navLinkClass}>
                Client Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink to="/teamMember" className={navLinkClass}>
                Meet the team Member
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Additional Links */}
        <div data-aos="fade-up" className="flex flex-col">
          <h3 className="regularColor text-xl font-bold mb-4">
            Additional Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/careers" className={navLinkClass}>
                Career
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className={navLinkClass}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/hire-staff" className={navLinkClass}>
                Hire Staff
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div
          data-aos="fade-down"
          className="w-full md:w-auto flex flex-col space-y-3 text-base"
        >
          <div>
            <h3 className="regularColor text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">
              <strong className="text-yellow-400">Prayagraj Office:</strong>
              <br />
              16, Bharadwaj Ashram Rd, Tagore Town,
              <br />
              Prayagraj, Uttar Pradesh 211002
            </p>
          </div>
          <div>
            <p>
              <strong className="text-yellow-400">Noida Office:</strong>
              <br />
              H-146, H Block, Sector 63,
              <br />
              Noida, Uttar Pradesh 201301
            </p>
            {/* call */}
            <div className="flex gap-1">
              <h1 className="activeYellow mt-1 text-xl font-bold">
                <FaPhone />
              </h1>
              <h1 className="text-xl font-semibold">7266896432</h1>
            </div>
            {/* email */}
            <div className="flex gap-2">
              <h1 className="activeYellow mt-1 text-xl font-bold">
                <FaEnvelope />
              </h1>
              <h1 className="text-md font-semibold">subhampatel9547@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-300 text-md pt-10 border-t border-green-700  mt-10">
        © 2025 All Rights Reserved SuKaj Infotech: We develop your Imagination
      </div>
    </footer>
  );
};

export default Footer;
