import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from 'Components/Nav';
import Countdown from 'Views/Countdown';
import Timer from 'Views/Timer';

import 'foundation-sites/dist/css/foundation-prototype.min.css';
import './styles/app.scss';

ReactDOM.render(
  <Router>
    <div className="my-app">
      <Nav />
      <Switch>
        <Route exact path="/timer" component={Timer} />
        <Route exact path="/countdown" component={Countdown} />
        <Route component={Timer} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('app')
);