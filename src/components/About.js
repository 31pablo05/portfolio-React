import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import './About.css';
import profilePhoto from '../components/assets/Diseño sin título (3).png';
import cvPDF from '../components/assets/Currículum Vitae ingles.pdf'; // Asegúrate de actualizar esta ruta

const About = () => {
  const [activeTab, setActiveTab] = useState('Perfil');

  return (
    <section id="sobre-mi" className="sobre-mi">
      <h2>Sobre mi</h2>
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'Perfil' ? 'active' : ''}`}
          onClick={() => setActiveTab('Perfil')}
        >
          Perfil
        </button>
        <button
          className={`tab ${activeTab === 'Estudios' ? 'active' : ''}`}
          onClick={() => setActiveTab('Estudios')}
        >
          Estudios
        </button>
        <button
          className={`tab ${activeTab === 'Skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('Skills')}
        >
          Skills
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'Perfil' && (
          <div className="profile">
            <div className="profile-text">
              <p>
                I am a passionate front-end development student with a solid foundation in HTML, CSS, and knowledge of React. I am committed to my learning and constantly seeking new technologies and functions in this field. Currently, I am honing my skills on the Coursera platform.

                My goal is to become a professional developer, and I am eager to put what I have learned into practice. While I do not yet have formal work experience, I am highly motivated to gain practical experience. I would love to learn to work remotely in a team and contribute my skills and enthusiasm to a development team.
              </p>
            </div>
            <div className="profile-photo">
              <img src={profilePhoto} alt="Pablo Proboste" />
            </div>
          </div>
        )}
        {activeTab === 'Estudios' && (
          <div className="studies">
            <ul>
              <li>
                <strong>IBM Front-End Developer(2023 - 2024,IBM Front-End DeveloperProfessionalCertificate)</strong> - Coursera Dictado por IBM
                <ul>
                  <li>ntroducción al Desarrolo Web con HTML, CSS,
                  JavaScript</li>
                  <li> Introducción a Git y GitHub</li>
                  <li> Introducción a la Ingeniería de Software</li>
                  <li> Desarrolo de Aplicaciones Front-end con React</li>
                  <li> Desarrolo de Aplicaciones Nativas en la Nube</li>
                  <li> Diseño de Interfaces y Experiencias de Usuario (UI/UX)</li>
                  <li>Proyecto Final de Desarrolo Front-end</li>
                  <li> Desarrolo Web y Front-end Intermedio</li>
                </ul>
              </li>
              <li>
                <strong> Meta Front-End Developer Professional Certificate</strong> -  Coursera Dictado por Meta
                <ul>
                <li>Introducción al Desarrolo Front-End</li>
                <li>Programación con JavaScript</li>
                <li>Control de Versiones</li>
                <li>HTML y CSS en Profundidad</li>
                <li>React Básico</li>
                  <li>React Avanzado</li>
                  <li>Principios de Diseño UX/UI</li>
                  <li>Proyecto Final de Desarrolo Front-End</li>
                  <li>Preparación para Entrevistas de Codificación</li>
                </ul>
              </li>
              {/* Add more studies as needed */}
            </ul>
          </div>
        )}
        {activeTab === 'Skills' && (
          <div className="skills">
            <FaHtml5 className="skill-icon" />
            <FaCss3Alt className="skill-icon" />
            <FaJs className="skill-icon" />
            <FaReact className="skill-icon" />
            <FaGithub className="skill-icon" />
          </div>
        )}
      </div>
      <div className="buttons">
        <a href="mailto:pabloproboste64@gmail.com" className="contact-button">📧 Contáctame</a>
        <a href={cvPDF} download="CV_Pablo_Proboste.pdf" className="cv-button">📄 Descargar CV</a>
      </div>
    </section>
  );
};

export default About;
