import React from 'react';
import Navbar from './components/navbar';
import HamburgerMenu from './components/hamburger';
import Profile from './components/profile';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';
import './App.css';
import StickyProfileIcon from './components/StickyProfileIcon';
function App() {
  return (
    <div>
      <StickyProfileIcon />
      <Navbar />
      <HamburgerMenu />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
