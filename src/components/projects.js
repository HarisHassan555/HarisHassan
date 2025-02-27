import React, { useEffect, useRef } from 'react';
import Telda from '../assets/teldaSS.png';
import Pepsi from '../assets/PepsiSS.png';
import Reservation from '../assets/reservationSS.png';
import Surveysummary from '../assets/surveysummarySS.png';
import Chatbot from '../assets/chatbotappSS.png'

const projects = [
  {
    title: 'Chatbot App',
    description: 'A sleek and responsive chatbot app built with React.js, Tailwind CSS, and Redux Toolkit, featuring Firebase integration for seamless authentication and real-time chat history storage.',
    image: Chatbot,
    url: 'https://chatbotapp-five.vercel.app/',
  },
  {
    title: 'Telda Clone',
    description: 'This project highlights Tailwind CSS for styling and Framer Motion for animations, demonstrating my ability to craft dynamic and visually appealing user interfaces.',
    image: Telda,
    url: 'https://teldaclone.vercel.app/',
  },
  {
    title: 'Survey Summary',
    description: 'Survey Summary is a responsive tool built with Next.js, Tailwind CSS, and TypeScript, using Firebase and Recoil. It features an AI chatbot that processes Excel files and generates curated reports for seamless data analysis.',
    image: Surveysummary,
    url: 'https://surveysummary-alpha.vercel.app/',
  },
  {
    title: 'Reservation System',
    description: 'This project features a responsive restaurant table reservation system, utilizing React Redux Toolkit for state management and Tailwind CSS for styling.',
    image: Reservation,
    url: 'https://reservation-system-one.vercel.app/',
  },
  {
    title: 'Pepsi Clone',
    description: 'This project showcases my ability to create a responsive Pepsi clone using React Three Fiber, Tailwind CSS, and Framer Motion for dynamic 3D visuals and smooth animations.',
    image: Pepsi,
    url: 'https://pepsi3d.vercel.app/',
  },
];

const Projects = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;
    let isPaused = false;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && scrollContainer) {
          if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
            // Reset to start when reaching the end
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft += 1; // Adjust speed by changing this value
          }
        }
      }, 20); // Adjust interval for smoother/faster scrolling
    };

    // Start scrolling
    startScrolling();

    // Pause on hover/touch
    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('touchstart', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('touchend', handleMouseLeave);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('touchstart', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      scrollContainer.removeEventListener('touchend', handleMouseLeave);
    };
  }, []);

  return (
    <section id="projects" className="bg-white text-gray-800 p-8 relative plus-jakarta-sans-secondary">
      <p className="text-center">Discover My</p>
      <h1 className="text-5xl font-bold text-center mb-8 plus-jakarta-sans-primary">Projects</h1>
      
      {/* Mobile Scrollable Container */}
      <div ref={scrollRef} className="md:hidden overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex space-x-6 w-max px-4">
          {/* Double the projects array to create seamless loop */}
          {[...projects, ...projects].map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-none w-[300px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
              <div className="p-5">
                <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 text-sm line-clamp-3">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
