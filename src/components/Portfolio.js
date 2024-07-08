import React from 'react';
import './Portfolio.css';
import Project from './Project/Project';

const Portfolio = () => {
  // Datos de ejemplo de proyectos
  const projects = [
    {
      id: 1,
      imageUrl: `${process.env.PUBLIC_URL}/images/proyecto appmedica.png`,
      link: 'https://med-app-react-stxj.vercel.app/LandingPage',
    },
    {
      id: 2,
      imageUrl: `${process.env.PUBLIC_URL}/images/calculadora.png`,
      link: 'https://calculadora-jicv18q5t-pablos-projects-8f10cb2f.vercel.app/',
    },
    {
      id: 3,
      imageUrl: `${process.env.PUBLIC_URL}/images/project3.jpg`,
      link: 'https://www.example.com/project3',
    },
    // Agregar más proyectos según sea necesario
  ];

  return (
    <section id="portafolio" className="portafolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project) => (
          <Project key={project.id} imageUrl={project.imageUrl} link={project.link} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
