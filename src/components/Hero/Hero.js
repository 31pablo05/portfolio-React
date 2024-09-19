import React from 'react';
import './Hero.css';
import Intro from './Intro';
import Photo from './Photo';

const Hero = () => (
  <section className="hero" aria-label="Introducción de Pablo Proboste">
    <Intro />
    <Photo />
  </section>
);

export default Hero;
