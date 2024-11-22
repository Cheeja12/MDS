import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';
import './Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Logo" className="logo" />
        <div className="footer-links">
          <h3>ABOUT</h3>
          <Link to="/Term">Terms & Conditions</Link>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/cheeja-sharma-11351628b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.facebook.com/cheeja07/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
          </div>
          <p>Copyright © 2024 Medicine_Dispensing_System</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
