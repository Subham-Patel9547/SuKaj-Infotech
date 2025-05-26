import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? "activeYellow font-bold" : "regularColor hover:activeYellow";

  return (
    <nav className="bg-gray-950/60  backdrop-blur-md fixed w-full top-0 left-0 z-50  navBarBorder">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center text-xl">
        <div className="h-10 w-32 rounded-3xl overflow-hidden ">
          <img
            src="./IMAGES/logo.png"
            alt="Company Logo"
            className="h-full w-full object-contain cursor-pointer rounded-3xl"
          />
        </div>
        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="md:hidden text-gray-100">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/careers" className={navLinkClass}>
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div
        className={` fixed top-0 left-0 h-full w-full bg-black backdrop-blur-md transform transition-transform duration-500 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Top section */}
          <div className="p-4 flex justify-between items-center border-b border-gray-100">
            <h2 className="text-xl font-bold activeYellow">Menu</h2>
            <button onClick={toggleMenu} className="text-yellow-400 font-bold">
              <X size={24} />
            </button>
          </div>

          {/* Center section */}
          <div className="py-80 flex-1 flex items-center justify-center bg-black backdrop-blur-2xl">
            <ul className="flex flex-col space-y-6 text-center font-medium text-gray-200 text-lg">
              <li>
                <NavLink to="/" onClick={closeMenu} className={navLinkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/careers"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
