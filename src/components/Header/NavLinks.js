import React from 'react';
import './NavLinks.css';

const NavLinks = () => {
  return (
    <nav role="navigation">
      <ul className="nav-links">
        <li><a href="#sobre-mi">Sobre mí</a></li>
        <li><a href="#portafolio">Portafolio</a></li>
        <li><a href="#contactame">Contáctame</a></li>
      </ul>
    </nav>
  );
};

export default NavLinks;
