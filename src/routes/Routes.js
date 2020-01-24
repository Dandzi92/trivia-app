import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Question from './Question';
import Success from './Success';
import Wrong from './Wrong';
import Timesup from './Timesup';
import Result from './Result';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/question" exact component={Question} />
    <Route path="/success" exact component={Success} />
    <Route path="/wrong" exact component={Wrong} />
    <Route path="/timesup" exact component={Timesup} />
    <Route path="/result" exact component={Result} />
  </Switch>
);

export default Routes;
