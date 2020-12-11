import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../../contexts/auth';

const Home: React.FC = () => {
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
    <div>
      SigIn
      <button onClick={handleSigin} type="button">
        sigin
      </button>
    </div>
  );
};

export default Home;
