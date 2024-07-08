import React, { useState, useEffect } from 'react';
import SocialLinks from './SocialLinks';
import './Hero.css'; // Asegúrate de importar tu archivo CSS de estilos

const Intro = () => {
  const [showRole, setShowRole] = useState(false);

  useEffect(() => {
    // Mostrar el texto después de un pequeño retraso (opcional)
    const timeout = setTimeout(() => {
      setShowRole(true);
    }, 500); // 500ms de retraso antes de mostrar el texto

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="intro">
      <h1>¡Hola! <span className="wave">👋</span> me llamo, <span className="name">Pablo Proboste</span></h1>
      <h2 className={showRole ? "role animated" : "role"}>
        Desarrollador Front-End
      </h2>
      <SocialLinks />
    </div>
  );
};

export default Intro;
