import React, { useState } from 'react';

import Buttons from '../components/Buttons';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import mail from '../../../img/mail.svg';

const Home: React.FC = () => {
  const [show, setShow] = useState<string | null>('buttons');

  function closeForm() {
    setShow('buttons');
  }
  function showSiginUp() {
    setShow('SiginUp');
  }
  function showSignIn() {
    setShow('SignIn');
  }

  const content = () => {
    switch (show) {
      case 'SignIn':
        return <SignIn closeForm={closeForm} showSiginUp={showSiginUp} />;
      case 'SiginUp':
        return <SignUp closeForm={closeForm} showSignIn={showSignIn} />;
      case 'buttons':
        return <Buttons showSiginUp={showSiginUp} showSignIn={showSignIn} />;
      default:
        return <div>{show}</div>;
    }
  };

  return (
    <div className="page-container black">
      <div className="welcome-box">
        <div className="mail-container">
          <img className="mail" alt="" src={mail} />
        </div>
        <div
          style={{ marginBottom: show === 'buttons' ? '348px' : '140px' }}
          className="title page-title"
        >
          welcome to the jungle
        </div>
      </div>
      {content()}
    </div>
  );
};

export default Home;
