import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Style/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <h1>
        <span className="text-white">Fahrizal</span>
        <span className="text-orange">.</span>
      </h1>
      <nav className={isMenuOpen ? 'open' : ''}>
        <ul>
          <li>
            <Link to="/" className={currentPath === '/' ? 'text-orange' : 'text-white'}>Home</Link>
          </li>
          <li>
            <Link to="/project" className={currentPath === '/project' ? 'text-orange' : 'text-white'}>Project</Link>
          </li>
          <li>
            <Link to="/certificate" className={currentPath === '/certificate' ? 'text-orange' : 'text-white'}>Certificate</Link>
          </li>
          <li>
            <Link to="/contact" className={currentPath === '/contact' ? 'text-orange' : 'text-white'}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={isMenuOpen ? 'menu-icon-line open' : 'menu-icon-line'}></div>
        <div className={isMenuOpen ? 'menu-icon-line open' : 'menu-icon-line'}></div>
        <div className={isMenuOpen ? 'menu-icon-line open' : 'menu-icon-line'}></div>
      </div>
    </header>
  );
};

export default Header;
