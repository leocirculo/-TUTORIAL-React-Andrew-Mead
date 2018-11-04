import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from 'Components/Nav';
import Home from 'Views/Home';

import 'foundation-sites/dist/css/foundation-prototype.min.css';
import './styles/app.scss';

ReactDOM.render(
  <Router>
    <div className="my-app">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('app')
);