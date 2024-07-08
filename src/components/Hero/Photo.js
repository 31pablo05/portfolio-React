import React from 'react';

const Photo = () => (
  <div className="photo">
    <img src={`${process.env.PUBLIC_URL}/images/about perfil.png`} alt="Pablo Proboste" />
  </div>
);

export default Photo;
