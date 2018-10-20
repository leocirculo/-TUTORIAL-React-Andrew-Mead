import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './views/Home';
import Examples from './views/Examples';

import 'foundation-sites/dist/css/foundation-prototype.min.css';
import './styles/app.scss';

ReactDOM.render(
  <Router>
    <div className="my-app">
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/examples" component={Examples} />
    </div>
  </Router>,
  document.getElementById('app')
);