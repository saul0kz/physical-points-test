import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../../../contexts/auth';

const Signin: React.FC = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState<string | null>(null);
  const [userName, setUsername] = useState('flavio');
  const [password, setPassword] = useState('123');

  async function handleSigin() {
    try {
      await signIn(userName, password);
    } catch (response) {
      setError('falha na Autenticação');
    }
  }

  return (
    <div className="sign-container">
      <div className="page-title mb-68">Welcome</div>
      <div className="form">
        <div className="field">
          <div className="control">
            <input
              className="input custom-form-input"
              type="text"
              placeholder="User"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input custom-form-input"
              type="text"
              placeholder="Password"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
