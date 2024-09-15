// src/components/Profile.js
import React from 'react';
import profilePic from '../assets/profile-pic.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import Resume from '../assets/HarisHassan_Resume.pdf'
import { Link } from 'react-scroll';

const Profile = () => {
  return (
    <section id="profile" className="flex flex-col plus-jakarta-sans-secondary lg:flex-row items-center justify-center h-screen p-6">
      <div className="w-64 h-64 lg:w-96 lg:h-96">
        <img src={profilePic} alt="Haris Hassan" className="rounded-full object-cover w-full h-full" />
      </div>
      <div className="mt-6 lg:mt-0 lg:ml-12 text-center lg:text-left">
        <p className="text-xl">Hello, I'm</p>
        <h1 className="text-4xl plus-jakarta-sans-primary">Haris Hassan</h1>
        <p className="text-3xl mt-2">Web Developer</p>
        <div className="flex justify-center lg:justify-start space-x-4 mt-4">
          <a href={Resume} download className="px-4 py-2 border rounded-3xl border-black hover:border-gray-400 hover:bg-gray-400 hover:text-white transition">
            Download CV
          </a>
          <Link
          to="contact"
          smooth={true}
          duration={900}
          className="px-4 py-2 bg-black rounded-3xl text-white hover:bg-gray-400 transition">
            Contact Info
        </Link>
        </div>
        <div className="flex justify-center w-max mx-auto lg:justify-start space-x-4 mt-6">
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="w-8 h-8 cursor-pointer hover:opacity-50"
            onClick={() => window.open('https://www.linkedin.com/in/haris-hassan-aa1984277/', '_blank')}
          />
          <img
            src={githubIcon}
            alt="GitHub"
            className="w-8 h-8 cursor-pointer hover:opacity-50"
            onClick={() => window.open('https://github.com/HarisHassan555', '_blank')}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
