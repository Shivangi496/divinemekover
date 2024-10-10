// src/components/HeroSection.js
import React from "react";
import img1 from '../../images/image1.jpg';
import './HeroSection.css';  // Import the external CSS file

const HeroSection = () => {
  return (
    <div id='hero'>
      <div className="hero-text">
        <h1 className="hero-heading">Best Makeup Studio and Salon in Lucknow</h1>
        <p className="hero-paragraph">
          We are divine Awadh Salon & Academy, Lucknow's top salon for elegance and beauty. A VLCC-certified cosmetologist, Poonam Ranjan Chowdhary, heads our expert makeup salon, which provides excellent treatments tailored to your style. With our highly skilled staff, you will surely receive outstanding results in a friendly atmosphere. Our goal is to bring out your best features, whether it's a regular beauty treatment or a special event makeover. Our salon in Lucknow is known for its elegance and perfection, so you don't need to look any further than divine Awadh Salon & Academy.
        </p>
      </div>
      <div>
        <img src={img1} alt="pic1" className="hero-image" />
      </div>
    </div>
  );
}

export default HeroSection;
