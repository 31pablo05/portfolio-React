import React from 'react';
import './index.css'; // Importa tus estilos base
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer/Footer'; // Asegúrate de que la ruta sea correcta

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
      <Footer /> {/* Añade el Footer aquí */}
    </div>
  );
}

export default App;
