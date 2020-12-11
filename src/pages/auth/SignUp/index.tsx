import React, { useContext, useState } from 'react';

import AuthContext from '../../../contexts/auth';

const Home: React.FC = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState<string | null>(null);
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSigin() {
    try {
      await signIn(userName, password);
    } catch (response) {
      setError('falha na Autenticação');
    }
  }

  return <div>SigUp</div>;
};

export default Home;
