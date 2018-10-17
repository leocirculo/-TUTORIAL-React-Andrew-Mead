import React from 'react';
import { NavLink } from "react-router-dom";

export default class Nav extends React.Component {
  onSearch(e) {
    e.preventDefault();
    alert('search is not available yet');
  }
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">React Weather</li>
            <li>
              <NavLink to="/" exact activeStyle={{ fontWeight: 'bold' }}>Get Weather</NavLink>
            </li>
            <li>
              <NavLink to="/about" exact activeStyle={{ fontWeight: 'bold' }}>About</NavLink>
            </li>
            <li>
              <NavLink to="/topics" exact activeStyle={{ fontWeight: 'bold' }}>Topics</NavLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search Weather" />
              </li>
              <li>
                <button type="submit" className="button">Get Weather</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
};