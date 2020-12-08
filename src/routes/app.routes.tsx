import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Favourites from '../pages/Favourites';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Favourites} />
      </Switch>
    </Router>
  );
};

export default Routes;
