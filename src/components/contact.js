import React from 'react';
import emailIcon from '../assets/email.png';
import linkedinIcon from '../assets/linkedin.png';

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center plus-jakarta-sans-secondary h-auto p-8">
      <p className="">Contact Me</p>
      <h1 className="text-5xl font-bold mb-8 plus-jakarta-sans-primary">Get In Touch</h1>
      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-12">
        <div className="flex items-center space-x-4">
          <img src={emailIcon} alt="Email" className="w-8 h-8" />
          <a href="mailto:harishassan551@gmail.com" className="text-lg hover:underline">harishassan551@gmail.com</a>
        </div>
        <div className="flex items-center space-x-4">
          <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
          <a href="https://www.linkedin.com/in/haris-hassan-aa1984277/" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">linkedin.com/in/harishassan</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
