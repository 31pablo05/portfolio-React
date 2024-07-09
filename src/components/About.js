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
                Soy un apasionado estudiante de desarrollo front-end con una sólida base en HTML, CSS y conocimientos en React. Estoy comprometido con mi aprendizaje y en constante búsqueda de nuevas tecnologías y funciones en este campo. Actualmente, estoy perfeccionando mis habilidades en la plataforma de Coursera.

                Mi objetivo es convertirme en un desarrollador profesional y estoy ansioso por poner en práctica lo que he aprendido. Aunque aún no tengo experiencia laboral formal, estoy altamente motivado para adquirir experiencia práctica. Me gustaría aprender a trabajar en equipo de manera remota y contribuir con mis habilidades y entusiasmo a un equipo de desarrollo.
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
                <strong>IBM Front-End Developer (2023 - 2024, IBM Front-End Developer Professional Certificate)</strong> - Coursera Dictado por IBM
                <ul>
                  <li>Introducción al Desarrolo Web con HTML, CSS, JavaScript</li>
                  <li>Introducción a Git y GitHub</li>
                  <li>Introducción a la Ingeniería de Software</li>
                  <li>Desarrolo de Aplicaciones Front-end con React</li>
                  <li>Desarrolo de Aplicaciones Nativas en la Nube</li>
                  <li>Diseño de Interfaces y Experiencias de Usuario (UI/UX)</li>
                  <li>Proyecto Final de Desarrolo Front-end</li>
                  <li>Desarrolo Web y Front-end Intermedio</li>
                </ul>
              </li>
              <li>
                <strong>Meta Front-End Developer Professional Certificate</strong> - Coursera Dictado por Meta
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
            </ul>
          </div>
        )}
        {activeTab === 'Skills' && (
          <div className="skills">
            <div className="skill">
              <FaHtml5 className="skill-icon fa-html5" />
              <span className="skill-name">HTML5</span>
            </div>
            <div className="skill">
              <FaCss3Alt className="skill-icon fa-css3-alt" />
              <span className="skill-name">CSS3</span>
            </div>
            <div className="skill">
              <FaJs className="skill-icon fa-js" />
              <span className="skill-name">JavaScript</span>
            </div>
            <div className="skill">
              <FaReact className="skill-icon fa-react" />
              <span className="skill-name">React</span>
            </div>
            <div className="skill">
              <FaGithub className="skill-icon fa-github" />
              <span className="skill-name">GitHub</span>
            </div>
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
