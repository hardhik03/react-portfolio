import { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = (
    <>
      <a href="#about" className="hover:text-purple-400">About</a>
      <a href="#skills" className="hover:text-purple-400">Skills</a>
      <a href="#experience" className="hover:text-purple-400">Experience</a>
      <a href="#projects" className="hover:text-purple-400">Projects</a>
      <a href="#contact" className="hover:text-purple-400">Contact</a>
      <a
        href="https://www.linkedin.com/in/hardhik-pvv/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-purple-400"
      >
        <FaLinkedin size={20} />
      </a>
      <a
        href="https://github.com/hardhik03"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-purple-400"
      >
        <FaGithub size={20} />
      </a>
    </>
  );

  return (
    <nav className="bg-transparent py-6 px-8 flex items-center justify-between">
      <span className="text-purple-500 font-bold text-2xl">Portfolio</span>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-8 text-gray-100 items-center">
        {navLinks}
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden text-white z-50" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-black text-gray-100 flex flex-col items-center space-y-6 py-8 z-40 shadow-lg">
          {navLinks}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
