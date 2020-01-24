import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Question from './Question';
import Success from './Success/Success';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/question" exact component={Question} />
    <Route path="/success" exact component={Success} />
  </Switch>
);

export default Routes;
