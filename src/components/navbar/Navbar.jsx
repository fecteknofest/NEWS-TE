import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Navbar stilleri

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img className="logo" src="LOGO.png" alt="Logo" />
        {/* <h1 className="title">Sakarya GM FEC</h1> */}
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/" className="nav-link">Ana Sayfa</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">Hakkımızda</Link>
          </li>
          <li>
            <Link to="/subscribers" className="nav-link">Destekçilerimiz</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">İletişim</Link>
          </li>
        </ul>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
