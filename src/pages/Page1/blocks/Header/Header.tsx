import React from 'react';
import './Header.scss';
import logo from "../../../../images/logo-full.svg";

function Header() {
  return (
    <div className="Header">
      <img src={logo} className="Header-logo" alt="logo"/>
      <div className="Header-links">
        <span className="Header-link">Page1</span>
        <span className="Header-link">Page2</span>
        <span className="Header-link">Page3</span>
          <span className="Header-link">Page4</span>
          <span className="Header-link">Page5</span>
      </div>
    </div>
  );
}

export default Header;
