import React, { useState } from 'react';
import '../Style/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
  <div className="navbar-container">
    <h1 className="navbar-logo">Vishal's Portfolio</h1>
    <div className="menu-icon" onClick={toggleMenu}>
      <img
        src={isOpen ? '/close.png' : 'menu.png'}
        alt={isOpen ? 'Close Menu' : 'Open Menu'}
      />
    </div>
    <div className={`nav-canvas ${isOpen ? 'open' : ''}`}>
      <ul className="nav-list">
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#services" onClick={toggleMenu}>Services</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navbar;