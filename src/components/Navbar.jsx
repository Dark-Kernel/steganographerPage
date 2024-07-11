import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">STEGANOGRAPHER</Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/encode" className="navbar-link">Encode</Link>
          <Link to="/decode" className="navbar-link">Decode</Link>
          <Link to="/about" className="navbar-link">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
