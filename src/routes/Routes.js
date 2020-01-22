import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Question from './Question';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/question" exact component={Question} />
  </Switch>
);

export default Routes;
