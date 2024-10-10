// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';  // Assuming external CSS 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <div>
      <p className="footer-quote">
          The new generation women across the world have overcome all negative notions and have proved themselves without doubt in all spheres of life. - Best Salon in Lucknow
        </p>
      </div>
      <div className='footer-links'>
      <h4>Useful Links</h4>
        <Link to="/" >Home</Link>
        <Link to="/" >About us</Link>
        <Link to="/" >Service</Link>
        <Link to="/" >Makeup</Link>
        <Link to="/" >Men grooming</Link>
        <Link to="/" >Gallery</Link>
        <Link to="/" >Contact us</Link>
      </div>
      <div className='services'>
      <h4>Our Services</h4>
      <ul className='list'>
      <li>Party Makeup</li>
      <li>Party Makeup</li>
      <li>Party Makeup</li>
      <li>Party Makeup</li>
      <li>Party Makeup</li>
      </ul>
      </div>
      <div className='footer-contact a'>
      <h4>Contact Us</h4>
            <div>
              <h5>DIVINEMEKOVER</h5>
              <p>1/58, Vijay Khand, Opp. Lohia Gate no. 2, Gomti Nagar, Lucknow 226010</p>
              <p>PHONE: <a href="tel:+919369103330">+919140722359</a>,
               <a href="tel:+9105224026655">+910522 4026655</a></p>
            </div>
      </div>
      
      
      </div>
    </footer>
  );
};

export default Footer;
