import React from 'react';
import { NavLink } from "react-router-dom";

export default class Nav extends React.Component {
  onSearch(e) {
    e.preventDefault();
    alert('implement search');
  }
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">
              <a href="/" style={{ padding: '0', color: 'white' }}>React Time App</a>
            </li>
            <li>
              <NavLink to="/timer" exact activeStyle={{ fontWeight: 'bold' }}>Timer</NavLink>
            </li>
            <li>
              <NavLink to="/countdown" exact activeStyle={{ fontWeight: 'bold' }}>Countdown</NavLink>
            </li>
          </ul> 
        </div>
        <div className="top-bar-right">
          <strong>Created by <a href="#">Leo Gonzalez</a></strong>
        </div>
      </div>
    );
  }
};