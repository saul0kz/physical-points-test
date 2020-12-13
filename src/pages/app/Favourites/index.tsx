import React, { useContext, useState } from 'react';
import AuthContext from '../../../contexts/auth';
import youtubeApi from '../../../services/api';

const Favourites: React.FC = () => {
  const { user, signOut } = useContext(AuthContext);
  const [chanels, setChanels] = useState<Array<any> | null>(null);
  const [keyword, setKeyword] = useState<string | null>(null);

  async function onSearch() {
    const response = await youtubeApi.get('/search', {
      params: {
        q: keyword,
      },
    });
    console.log(response.data.items);
    setChanels(response.data?.items);
  }

  return (
    <div className="App">
      <h1 className="brand-title">{user?.userName}</h1>

      <input
        className="input"
        type="text"
        onChange={e => setKeyword(e.target.value)}
        placeholder=""
      />

      <button onClick={onSearch} type="button">
        Sign Out
      </button>
    </div>
  );
};

export default Favourites;
