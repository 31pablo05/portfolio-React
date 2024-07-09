import React from 'react';
import './Project.css';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'; // Importa los íconos de enlace externo y GitHub

const Project = ({ imageUrl, link, githubLink, description, technologies }) => (
  <div className="project">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt="Proyecto" className="project-image" />
    </a>
    <div className="project-details">
      <p className="project-description">{description}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index} className={`technology-icon ${getTechnologyIconClassName(tech)}`}>
            {tech}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          Ver proyecto <FaExternalLinkAlt className="external-link-icon" />
        </a>
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
            Ver código en GitHub <FaGithub className="github-icon" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const getTechnologyIconClassName = (tech) => {
  switch (tech.key) {
    case 'html':
      return 'fa-html5';
    case 'css':
      return 'fa-css3-alt';
    case 'js':
      return 'fa-js';
    case 'react':
      return 'fa-react';
    default:
      return '';
  }
};

export default Project;
