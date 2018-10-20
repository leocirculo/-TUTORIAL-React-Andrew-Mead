import React from 'react';
import { NavLink } from "react-router-dom";

export default class Nav extends React.Component {
  onSearch(e) {
    e.preventDefault();
    const location = this.refs.search.value;
    const encondedLocation = encodeURIComponent(location);
    location && window.location.replace(`/?location=${encondedLocation}`);
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
              <NavLink to="/examples" exact activeStyle={{ fontWeight: 'bold' }}>Examples</NavLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch.bind(this)}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search Weather" ref="search" />
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