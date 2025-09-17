import React from 'react';
import './Hero.css';
// Correct relative path from Hero.js to image.png
import heroImage from '../assets/hero/image/image.png';

const Hero = () => {
  return (
    // Use an inline style to set the background image
    <div className="hero-container" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        {/* Your content (e.g., SearchFilterBar) will be here */}
      </div>
    </div>
  );
};

export default Hero;