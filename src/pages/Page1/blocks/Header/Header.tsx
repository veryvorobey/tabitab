import React from 'react';
import './Header.scss';
import logo from "../../../../images/logo-full.svg";

function Header() {
  return (
    <div className="Header">
      <img src={logo} className="Header-logo" alt="logo"/>
      <div className="Header-links">
        <span className="Header-link">link 1</span>
        <span className="Header-link">link 2</span>
        <span className="Header-link">link 3</span>
      </div>
    </div>
  );
}

export default Header;
