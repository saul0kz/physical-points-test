import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      Welcome
      <Link to="/signIn">
        <button type="button">sigin</button>
      </Link>
      <Link to="/signUp">
        <button type="button">signup</button>
      </Link>
    </div>
  );
};

export default Home;
