import React from 'react';
import './Portfolio.css';
import Project from './Project/Project';
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'; // Importa los íconos necesarios

const Portfolio = () => {
  // Datos de ejemplo de proyectos
  const projects = [
    {
      id: 1,
      imageUrl: `${process.env.PUBLIC_URL}/images/proyecto appmedica.png`,
      link: 'https://med-app-react-stxj.vercel.app/LandingPage',
      githubLink: 'https://github.com/31pablo05/med_app_react', // Enlace a tu código en GitHub
      description: 'Una aplicación médica desarrollada con React.js para gestionar datos de pacientes y citas médicas.',
      technologies: [<FaReact key="react" />, <FaHtml5 key="html" />, <FaCss3Alt key="css" />], // Ejemplo de íconos
    },
    {
      id: 2,
      imageUrl: `${process.env.PUBLIC_URL}/images/calculadora.png`,
      link: 'https://calculadora-jicv18q5t-pablos-projects-8f10cb2f.vercel.app/',
      githubLink: 'https://github.com/31pablo05/calculadora', // Enlace a tu código en GitHub
      description: 'Una calculadora web desarrollada con HTML, CSS y JavaScript para realizar operaciones matemáticas básicas.',
      technologies: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />], // Ejemplo de íconos
    },
    {
      id: 3,
      imageUrl: `${process.env.PUBLIC_URL}/images/rickandmorty.png`,
      link: 'https://rick-y-morty-kmo2.vercel.app/',
      githubLink: 'https://github.com/31pablo05/rick-y-morty', // Enlace a tu código en GitHub
      description: 'app de personajes favoritos de rick and morty',
      technologies: [<FaReact key="react" />, <FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />], // Ejemplo de íconos
    },
    // Agregar más proyectos según sea necesario
  ];

  return (
    <section id="portafolio" className="portafolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project) => (
          <Project
            key={project.id}
            imageUrl={project.imageUrl}
            link={project.link}
            githubLink={project.githubLink} // Pasa la prop githubLink
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
