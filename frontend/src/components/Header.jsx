import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header sticky">
      <div className="container">
        <div className="logo" onClick={scrollToTop}>
          <img src={logo} alt="Medicine Dispensing System" />
          <h1 style={{ fontSize: '18px', color: '#000000' }}>
            Medicine Dispensing System
          </h1>
        </div>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={scrollToTop}><i className="home-icon">🏠</i></Link>
          <Link to="/login">Log in</Link>
          <Link to="/signup" className="signup-btn">Sign up</Link>
        </nav>
        <button className={`burger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="burger-icon"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
