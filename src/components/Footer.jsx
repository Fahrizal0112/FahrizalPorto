import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright text-white">
        &copy; {new Date().getFullYear()} Fahrizal Portfolio. All rights reserved.
      </div>
      <div className="social-icons">
        <a href="https://github.com/fahrizal0112" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/mfachrzl" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/muchammad-fahrizal/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
