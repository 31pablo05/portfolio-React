import React from 'react';
import logo from '../assets/logo.png';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Logo" className="footer-logo" />
        <div className="social-links">
          <a href="https://www.linkedin.com/in/pablo-proboste" className="social-link" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/31pablo05" className="social-link" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:pabloProboste@gmail.com" className="social-link" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Pablo Proboste. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
