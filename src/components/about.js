import React from "react";
import profileicon2 from "../assets/profileicon2.svg";
import experienceIcon from "../assets/experience.png";
import educationIcon from "../assets/education.png";
const About = () => {
  return (
    <section
      id="about"
      className="bg-white plus-jakarta-sans-secondary px-[12%] relative mb-[4rem]"
    >
      <p className=" text-center">Get To Know More</p>
      <h1 className="text-5xl plus-jakarta-sans-primary text-center mb-8">
        About Me
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="w-64 h-64 lg:w-96 lg:h-96">
          <img src={profileicon2} alt="About" className="w-full h-full" />
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
                BSCS. Bachelor's Degree
                <br/>
                UMT, lahore
              </p>
            </div>
          </div>
          <div className="text-justify w-full">
            <p>
              I’m Haris Hassan, a 23-year-old Frontend Developer passionate
              about development, specializing in React.js, Tailwind CSS, and
              Bootstrap. While my focus is on frontend, I’m also familiar with
              backend technologies like Firebase. I use React Redux Toolkit for
              state management and React Router for navigation. I excel at
              transforming design concepts into responsive, high-quality user
              interfaces, balancing functionality with aesthetics, and I'm
              committed to continuous learning and growth in web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
