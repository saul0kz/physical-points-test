import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Favourites from './pages/Favourites';
import Home from './pages/Home';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favourites" exact component={Favourites} />
      </Switch>
    </Router>
  );
};

export default Routes;
