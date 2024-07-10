import React from 'react';
import logo from '../assets/logo.png'; // Asegúrate de que la ruta al logo sea correcta
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>
    </footer>
  );
};

export default Footer;
