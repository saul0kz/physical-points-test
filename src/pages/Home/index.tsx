import React, { useContext, useState } from 'react';
import AuthContext from '../../contexts/auth';

const Home: React.FC = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState<string | null>(null);

  async function handleSigin() {
    try {
      await signIn('flavio', '123');
    } catch (err) {
      if (err) {
        setError('falha na Autenticação');
      }
    }
  }

  return (
    <div className="App">
      <h1 className="brand-title">Home</h1>

      <button type="button" onClick={handleSigin}>
        Login
      </button>
      {error ? <div>{error}</div> : null}
    </div>
  );
};

export default Home;
