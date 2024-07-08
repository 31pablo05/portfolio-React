import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './SocialLinks.css';

const SocialLinks = () => (
  <div className="social-links">
    <a href="https://www.linkedin.com/in/pablo-proboste" className="social-link">
      <FaLinkedin /> LinkedIn
    </a>
    <a href="https://github.com/31pablo05" className="social-link">
      <FaGithub /> GitHub
    </a>
    <a href="mailto:pabloProboste@gmail.com" className="social-link">
      <FaEnvelope /> pabloProboste@gmail.com
    </a>
  </div>
);

export default SocialLinks;
