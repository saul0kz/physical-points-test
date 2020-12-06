import React from 'react';

import './App.css';
import Routes from './routes';
import { AuthProvidier } from './contexts/auth';

const App: React.FC = () => {
  return (
    <AuthProvidier>
      <Routes />
    </AuthProvidier>
  );
};

export default App;
