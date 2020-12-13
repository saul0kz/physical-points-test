/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext, useState } from 'react';
import AuthContext from '../../../../contexts/auth';
import closeButton from '../../../../img/close-button.svg';
import line from '../../../../img/line.svg';

interface ChildProps {
  closeForm: () => void;
  showSiginUp: () => void;
}

const Signin: React.FC<ChildProps> = (props: ChildProps) => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsloading] = useState(false);
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSigin() {
    setIsloading(true);
    try {
      await signIn(userName, password);
    } catch (response) {
      setError('Invalid Credentials');
    }
    setIsloading(false);
  }
  const isDisabled = !userName || !password || isLoading;
  const { closeForm, showSiginUp } = props;
  return (
    <div className="sign-container">
      <div className="close-button-container">
        <img
          alt=""
          className="close-button"
          src={closeButton}
          onClick={closeForm}
        />
      </div>
      <div className="title mb-68">Welcome</div>
      <div className="form">
        <div className="field">
          <input
            className="input"
            onChange={e => setUsername(e.target.value)}
            type="text"
            placeholder="User"
          />
        </div>
        <div className="field">
          <input
            className="input"
            type="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="field">
          <div className="error">{error}</div>
        </div>
        <div className="field">
          <button
            disabled={isDisabled}
            type="button"
            className={isDisabled ? 'button black disabled' : 'button black '}
            onClick={handleSigin}
          >
            Sign in
          </button>
        </div>

        <div role="button" className="field" onClick={showSiginUp}>
          <div className="tag-button">new user</div>
        </div>
      </div>
      <div>
        <img alt="" src={line} />
      </div>
    </div>
  );
};

export default Signin;
