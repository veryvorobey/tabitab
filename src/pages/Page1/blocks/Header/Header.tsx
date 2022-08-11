import React from 'react';
import './Header.scss';
import logo from "../../../../images/logo-full.svg";
import {IMAGE_ALT} from "../../../../common/constants";

function Header() {
  return (
    <div className="Header">
      <img src={logo} className="Header-logo" alt={IMAGE_ALT}/>
      <div className="Header-links">
        <span className="Header-link">Page1</span>
        <span className="Header-link">Page2</span>
        <span className="Header-link">Page3</span>
        <span className="Header-link">Page4</span>
        <span className="Header-link">Page5</span>
      </div>
      <div className="Header-menu">
        <div className="Header-menuLine"/>
        <div className="Header-menuLine"/>
        <div className="Header-menuLine"/>
      </div>
    </div>
  );
}

export default Header;
