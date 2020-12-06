import React, { useContext } from 'react';
import AuthContext from '../../contexts/auth';

const Home: React.FC = () => {
  const { signed, signIn } = useContext(AuthContext);

  console.log(signed);

  function handleSigin() {
    signIn().then(response => {
      console.log(response);
    });
  }

  return (
    <div className="App">
      <h1 className="brand-title">Home</h1>

      <button type="button" onClick={handleSigin}>
        Login
      </button>
    </div>
  );
};

export default Home;
