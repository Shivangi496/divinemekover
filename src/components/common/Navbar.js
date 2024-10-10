// src/App.js
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/logoB.jpg';
import './Navbar.css';  // Import the external CSS file

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={img} alt="logo" />
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/" className="navbar-link">About us</Link>
        <Link to="/" className="navbar-link">Service</Link>
        <Link to="/" className="navbar-link">Makeup</Link>
        <Link to="/" className="navbar-link">Men grooming</Link>
        <Link to="/" className="navbar-link">Gallery</Link>
        <Link to="/" className="navbar-link">Contact us</Link>
      </div>
    </div>
  );
}

export default Navbar;
