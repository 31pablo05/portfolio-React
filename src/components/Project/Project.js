import React from 'react';
import './Project.css';

const Project = ({ imageUrl, link }) => (
  <div className="project">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt="Proyecto" />
    </a>
  </div>
);

export default Project;
