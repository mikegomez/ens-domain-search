import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Add your logo and website name */}
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/expiring-domains">Expiring Domains</Link>
      </nav>
    </header>
  );
};

export default Header;
