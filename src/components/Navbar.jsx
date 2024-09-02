import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="fixed top-4 right-4 flex flex-col items-end gap-4 text-white text-2xl md:text-xl shadow-md">
      <a 
        href="https://www.linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-cyan-300 transition-colors duration-300"
      >
        <FaLinkedin />
      </a>
      <a 
        href="https://github.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-gray-400 transition-colors duration-300"
      >
        <FaGithub />
      </a>
      <a 
        href="https://www.instagram.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-pink-400 transition-colors duration-300"
      >
        <FaInstagram />
      </a>
    </nav>
  );
}

export default Navbar;
