import React from 'react';
import './index.css'; // Importa tus estilos base
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
