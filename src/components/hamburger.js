import React, { useState } from "react";
import { Link } from 'react-scroll';


const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="lg:hidden flex justify-between items-center p-6 plus-jakarta-sans-secondary">
      <div className="text-3xl plus-jakarta-sans-primary">Haris Hassan</div>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="focus:outline-none"
      >
        <div
          className={`w-6 h-0.5 bg-black my-1 transition-transform duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-black my-1 transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-black my-1 transition-transform duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </button>
      {menuOpen && (
        <ul className="absolute top-20 text-xl right-6 bg-gray-100 flex flex-col space-y-4 p-4 rounded-md">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-gray-400"
          >
            About
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="hover:text-gray-400"
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-gray-400"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-gray-400"
          >
            Contact
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default HamburgerMenu;
