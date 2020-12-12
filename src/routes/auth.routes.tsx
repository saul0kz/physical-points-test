import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from '../pages/auth/components/SignIn';
import SignUp from '../pages/auth/SignUp';
import Welcome from '../pages/auth/Welcome';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
    </Router>
  );
};

export default Routes;
