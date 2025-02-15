import React from 'react';
import './About.css';

const About = ({ onClose }) => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          We are a passionate team dedicated to delivering the best experiences
          to our customers. Our mission is to create meaningful connections
          through our products and services.
        </p>
        <button onClick={onClose}>Learn More</button>
      </div>
    </section>
  );
}

export default About;

