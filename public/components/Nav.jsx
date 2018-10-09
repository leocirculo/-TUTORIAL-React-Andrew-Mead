import React from 'react';
import { NavLink } from "react-router-dom";
import './../styles/navbar.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-group navbar-logo">
        <p>React Weather</p>
      </div>
      <div className="navbar-group navbar-links">
        <ul>
          <li>
            <NavLink to="/" exact activeStyle={{ fontWeight: 'bold'}}>Get Weather</NavLink>
          </li>
          <li>
            <NavLink to="/about" exact activeStyle={{ fontWeight: 'bold' }}>About</NavLink>
          </li>
          <li>
            <NavLink to="/topics" exact activeStyle={{ fontWeight: 'bold' }}>Topics</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-links navbar-owner">
        <a href="https://github.com/leoggonzalez" target="_blank">Leo Gonzalez</a>
      </div>
    </nav>
  );
};

export default Nav;