import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './views/Home';
import About from './views/About';
import './styles/main.css';

ReactDOM.render(
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </div>
  </Router>,
  document.getElementById('app')
);