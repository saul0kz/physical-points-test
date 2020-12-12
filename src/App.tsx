import React from 'react';

import './App.scss';
import Routes from './routes/index';
import { AuthProvidier } from './contexts/auth';

const App: React.FC = () => {
  return (
    <AuthProvidier>
      <Routes />
    </AuthProvidier>
  );
};

export default App;
