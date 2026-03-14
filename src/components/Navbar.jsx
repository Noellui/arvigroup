import React, { useState } from 'react';
import '../styles/Navbar.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-topbar">
        <span>📧 Aarvi_ms@yahoo.co.in</span>
        <span>📞 +91 9825279602</span>
      </div>
      <nav className="navbar">
        <div className="navbar-brand" onClick={() => scrollTo('hero')}>
          <img
            src="/images/Logo and Name.png"
            alt="Aarvi Data Analytics Services"
            className="logo-img"
          />
          <div className="brand-divider" />
          <img
            src="/images/AMFI Registered Mutual Fund Distributor.png"
            alt="AMFI Registered Mutual Fund Distributor"
            className="amfi-img"
          />
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </div>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><button onClick={() => scrollTo('hero')}>Home</button></li>
          <li><button onClick={() => scrollTo('about')}>About Us</button></li>
          <li><button onClick={() => scrollTo('services')}>Services</button></li>
          <li><button onClick={() => scrollTo('contact')}>Contact Us</button></li>
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Navbar;