import React from "react";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="hidden lg:flex justify-between items-center pt-[2rem] px-[10%] plus-jakarta-sans-secondary">
      <div className="text-3xl plus-jakarta-sans-primary">Haris Hassan</div>
      <ul className="flex text-xl space-x-8">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="hover:text-gray-400 cursor-pointer hover:underline underline-offset-8">
          About
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={700}
          className="hover:text-gray-400 cursor-pointer hover:underline underline-offset-8"        >
          Experience
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={900}
          className="hover:text-gray-400 cursor-pointer hover:underline underline-offset-8"        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={1100}
          className="hover:text-gray-400 cursor-pointer hover:underline underline-offset-8"        >
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
