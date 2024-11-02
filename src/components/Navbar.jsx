// Navbar.jsx
import React from 'react';
import '../assets/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Web Profile</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Skills">Skills</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
