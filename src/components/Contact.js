import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccessMessage(data.message);
        setEmail('');
        setMessage('');
      } else {
        setSuccessMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSuccessMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contactame" className="contactame">
      <h2>Contáctame</h2>
      <div className="contact-content">
        <div className="contact-buttons">
          <a href="https://wa.me/+542804389134" className="contact-button whatsapp" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
          <a href="mailto:pabloProboste64@gmail.com" className="contact-button gmail" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i> Gmail
          </a>
          <a href="/images/Currículum Vitae castellano.pdf" className="contact-button download-cv" download>
            <i className="fas fa-download"></i> Descargar CV
          </a>
        </div>
        <div className="contact-form">
          <h3>Contacto</h3>
          <p>Puedes contactar conmigo mediante el siguiente formulario</p>
          {successMessage && <p>{successMessage}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="*Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="*Mensaje"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <label>
              <input type="checkbox" required /> *Acepto la <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">política de privacidad</a>
            </label>
            <button type="submit">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
