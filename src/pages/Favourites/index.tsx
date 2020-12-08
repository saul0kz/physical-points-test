import React, { useContext } from 'react';
import AuthContext from '../../contexts/auth';

const Favourites: React.FC = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <div className="App">
      <h1 className="brand-title">Favourites</h1>

      <button onClick={signOut} type="button">
        Sign Out
      </button>
    </div>
  );
};

export default Favourites;
