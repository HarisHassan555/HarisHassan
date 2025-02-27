import React from 'react';
import checkmarkIcon from '../assets/checkmark.png';

const Experience = () => {
  const frontendSkills = [
    { name: 'React', level: 'Experienced' },
    { name: 'Redux', level: 'Experienced' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Experienced' },
    { name: 'TypeScript', level: 'Basic' },
    { name: 'React Router', level: 'Intermediate' },
  ];

  const backendSkills = [
    { name: 'Node JS', level: 'Basic' },
    { name: 'Express JS', level: 'Basic' },
    { name: 'Postman', level: 'Intermediate' },
    { name: 'Mongo DB', level: 'Basic' },
    { name: 'Firebase' ,level:'Intermediate'},
    { name: 'REST API', level: 'Intermediate' },

  ];

  return (
    <section id="experience" className="p-8 relative plus-jakarta-sans-secondary">
      <p className="text-center">Explore My</p>
      <h1 className="text-5xl font-bold text-center mb-8">Experience</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 h-full">
        {/* Frontend Development */}
        <div className="flex-1 border-2 border-black rounded-3xl p-4 sm:p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">Frontend Development</h2>
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            {frontendSkills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-2 sm:space-x-4 p-2 sm:p-4 rounded-lg shadow-lg hover:bg-gray-200 cursor-pointer">
                <img src={checkmarkIcon} alt="Checkmark" className="w-5 h-5 sm:w-6 sm:h-6" />
                <div>
                  <h3 className="text-base sm:text-lg font-medium">{skill.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-500">{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Backend Development */}
        <div className="flex-1 border-2 border-black rounded-3xl p-4 sm:p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">Backend Development</h2>
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            {backendSkills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-2 sm:space-x-4 p-2 sm:p-4 rounded-lg shadow-lg hover:bg-gray-200 cursor-pointer">
                <img src={checkmarkIcon} alt="Checkmark" className="w-5 h-5 sm:w-6 sm:h-6" />
                <div>
                  <h3 className="text-base sm:text-lg font-medium">{skill.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-500">{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
