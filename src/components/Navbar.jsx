import React, { useState } from 'react';
import '../styles/Navbar.css';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ navigateTo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => {
    navigateTo(id);
    setMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <div className="navbar-brand" onClick={() => go('hero')}>
          <img
            src="/images/logo and Amfi registration.png"
            alt="Aarvi Data Analytics Services – AMFI Registered Mutual Fund Distributor"
            className="logo-img"
          />
        </div>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><button onClick={() => go('hero')}>Home</button></li>
          <li><button onClick={() => go('about')}>About Us</button></li>
          <li><button onClick={() => go('leadership')}>Leadership</button></li>
          <li><button onClick={() => go('services')}>Services</button></li>
          <li><button onClick={() => go('contact')}>Contact Us</button></li>
        </ul>

        <div className="navbar-actions">
          <ThemeToggle />
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;