import React, { useState } from 'react';

import SignIn from '../components/SignIn';

const Home: React.FC = () => {
  const [show, setShow] = useState<string | null>('SignIn');

  function closeForm() {
    setShow('buttons');
  }
  function showSignOut() {
    setShow('SignOut');
  }

  const content = () => {
    switch (show) {
      case 'SignIn':
        return <SignIn closeForm={closeForm} />;
      case 'SignOut':
        return 'SignOut';
      case 'buttons':
        return 'buttons';
      default:
        return 'buttons';
    }
  };

  return <div className="page-container black">{content()}</div>;
};

export default Home;
