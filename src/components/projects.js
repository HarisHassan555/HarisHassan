import React from 'react';
import Telda from '../assets/teldaSS.png';
import Pepsi from '../assets/PepsiSS.png';
import Reservation from '../assets/reservationSS.png';

const projects = [
  {
    title: 'Telda Clone',
    description: 'This project highlights Tailwind CSS for styling and Framer Motion for animations, demonstrating my ability to craft dynamic and visually appealing user interfaces.',
    image: Telda,
    url: 'https://teldaclone.vercel.app/',
  },
  {
    title: 'Pepsi Clone',
    description: 'This project showcases my ability to create a responsive Pepsi clone using React Three Fiber, Tailwind CSS, and Framer Motion for dynamic 3D visuals and smooth animations.',
    image: Pepsi,
    url: 'https://pepsi3d.vercel.app/',
  },
  {
    title: 'Reservation System',
    description: 'This project features a responsive restaurant table reservation system, utilizing React Redux Toolkit for state management and Tailwind CSS for styling.',
    image: Reservation,
    url: 'https://reservation-system-one.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white text-gray-800 p-8 relative plus-jakarta-sans-secondary">
      <p className="text-center">Discover My</p>
      <h1 className="text-5xl font-bold text-center mb-8 plus-jakarta-sans-primary">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
