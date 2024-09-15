import React, { useState, useEffect } from "react";
import profileicon from "../assets/profileicon.svg";

const StickyProfileIcon = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed transition-all duration-300 z-50 cursor-pointer ${
        isScrolled
          ? "top-4 left-4 w-24 h-24"
          : "top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 lg:top-[62%] lg:left-[37%] lg:w-96 lg:h-96"
      }`}
      onClick={handleClick}
    >
      <img src={profileicon} alt="Haris Hassan" className="w-full h-full" />
    </div>
  );
};

export default StickyProfileIcon;
