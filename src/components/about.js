import React from "react";
import aboutPic from "../assets/about-pic.png";
import experienceIcon from "../assets/experience.png";
import educationIcon from "../assets/education.png";
import arrowIcon from "../assets/arrow.png";
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section
      id="about"
      className="bg-white plus-jakarta-sans-secondary px-[12%] relative mb-[4rem]"
    >
      <p className=" text-center">Get To Know More</p>
      <h1 className="text-5xl plus-jakarta-sans-primary text-center mb-8">About Me</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="w-64 h-64 lg:w-96 lg:h-96">
          <img
            src={aboutPic}
            alt="About"
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <div className="hehe flex flex-col sm:flex-row gap-8 mb-6 w-full justify-center">
            <div className="flex-grow flex flex-col items-center self-center bg-gray-100 border border-gray-300 rounded-2xl p-6 max-w-xs sm:max-w-sm lg:max-w-md">
              <img
                src={experienceIcon}
                alt="Experience"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-semibold">Experience</h3>
              <p className="text-center">
                2+ years <br />
                Frontend Development
              </p>
            </div>
            <div className="hehe flex-grow flex flex-col items-center self-center bg-gray-100 border border-gray-300 rounded-2xl p-6 max-w-xs sm:max-w-sm lg:max-w-md">
              <img
                src={educationIcon}
                alt="Education"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-semibold">Education</h3>
              <p className="text-center">
                B.Sc. Bachelor's Degree
                <br />
                M.Sc. Master's Degree
              </p>
            </div>
          </div>
          <div className="text-justify w-full">
            <p>
              I’m Haris Hassan, a 22-year-old Frontend Developer passionate about
              development, I specialize in React.js, Tailwind CSS, and
              Bootstrap. My skills include utilizing React Redux Toolkit for
              state management and React Router DOM for navigation. I
              excel at transforming design concepts into responsive,
              high-quality user interfaces that balance functionality and
              aesthetics. With strong problem-solving abilities and a
              collaborative mindset i'm committed to continuous learning
              and growth to build engaging web applications.
            </p>
          </div>
        </div>
      </div>
      <Link
          to="experience"
          smooth={true}
          duration={500}
          >
            <img
        src={arrowIcon}
        alt="Arrow"
        className="absolute bottom-4 right-4 w-12 h-12 cursor-pointer animate-bounce"
      />
        </Link>
    </section>
  );
};

export default About;
