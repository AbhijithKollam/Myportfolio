import React, { useState } from 'react';
import '../styles/Header.css'; // Import the CSS file for styling
import { NavLink } from 'react-router-dom';


function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar fixed top-0 w-full ">
      <div className="brand">Abhijith</div>
      <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
        <li className='hover:scale-150 duration-500'> <a href="#home">Home</a></li>
        <li className='hover:scale-150 duration-500'> <a href="#about">About</a></li>
        <li className='hover:scale-150 duration-500'> <a href="#works">Projects</a></li>
        <li className='hover:scale-150 duration-500'><a href="#skills">Skills</a></li>
        <li className='hover:scale-150 duration-500'> <a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-icon" onClick={toggleNav}>
        <i className={`fas ${isNavOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
  );
}

export default Header;
