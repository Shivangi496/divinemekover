// src/components/Services.js
import React from "react";
import bridal from '../../images/bridal.jpg';
import './Services.css';  // Import the external CSS file

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Services</h1>
        <p className="services-description">
          The KNK Awadh Salon & Academy is an excellent unisex salon located in the heart of Lucknow. Our services include makeup for fashion shoots and bridal sessions, among other things. Our talented artists offer a variety of cosmetic treatments, ensuring that every customer leaves feeling attractive and self-assured.
        </p>
      </div>
      <div className="services-items">
        <div className="services-item">
          <img src={bridal} alt="Bridal Makeup" />
          <h1>Bridal Makeup</h1>
        </div>
        <div className="services-item">
          <h1>Engagement Makeup</h1>
        </div>
        <div className="services-item">
          <h1>Party Makeup</h1>
        </div>
        <div className="services-item">
          <h1>Men Grooming</h1>
        </div>
      </div>
    </div>
  );
}

export default Services;
