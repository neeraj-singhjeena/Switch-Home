import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero/image/image.png';

const Hero = ({ children }) => {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        {children}
      </div>
    </div>
  );
};

export default Hero;