import React from 'react';

const Logo = () => {
  return (
    <div className="logo">
      <a href="#hero">
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo de Pablo Proboste" />
      </a>
    </div>
  );
};

export default Logo;
