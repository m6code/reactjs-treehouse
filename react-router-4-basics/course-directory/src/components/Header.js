import React from 'react';
import {Link } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/teachers">Teachers</Link></li>
      <li><Link to="/courses">Courses</Link></li>
    </ul>    
  </header>
);

export default Header;