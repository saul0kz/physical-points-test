/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

import line from '../../../../img/line.svg';

interface ChildProps {
  showSignIn: () => void;
  showSiginUp: () => void;
}

const Signin: React.FC<ChildProps> = (props: ChildProps) => {
  const { showSignIn, showSiginUp } = props;
  return (
    <div className="sign-container black">
      <div className="field">
        <button type="button" className="button" onClick={showSiginUp}>
          Sign up
        </button>
      </div>
      <div className="field">
        <button type="button" className="button" onClick={showSignIn}>
          Sign in
        </button>
      </div>
      <div className="field">
        <img alt="" src={line} className="line" />
      </div>
    </div>
  );
};

export default Signin;
