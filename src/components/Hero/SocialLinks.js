import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './SocialLinks.css';

const SocialLinks = () => (
  <div className="social-links" aria-label="Enlaces de redes sociales">
    <a href="https://www.linkedin.com/in/pablo-proboste" className="social-link" aria-label="Perfil de LinkedIn">
      <FaLinkedin /> LinkedIn
    </a>
    <a href="https://github.com/31pablo05" className="social-link" aria-label="Perfil de GitHub">
      <FaGithub /> GitHub
    </a>
    <a href="mailto:pabloProboste@gmail.com" className="social-link" aria-label="Enviar un correo a Pablo">
      <FaEnvelope /> pabloProboste@gmail.com
    </a>
  </div>
);

export default SocialLinks;
