import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Favourites from '../pages/app/Favourites';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Favourites} />
        {/* <Redirect from="/signIn" to="/" /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
