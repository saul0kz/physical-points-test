import React, { useContext, useState } from 'react';
import AuthContext from '../../../contexts/auth';
import youtubeApi from '../../../services/api';

interface Channel {
  channelTitle: string;
  channelId: string;
  thumbnail: string;
}

const Favourites: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [chanels, setChanels] = useState([] as Array<Channel>);
  const [keyword, setKeyword] = useState<string | null>(null);

  async function onSearch() {
    setChanels([]);
    const response = await youtubeApi.get('/search', {
      params: {
        q: keyword,
      },
    });

    const { items } = response.data;
    const newChannels: Array<Channel> = [];
    items.forEach(
      (item: {
        snippet: {
          channelTitle: string;
          channelId: string;
          thumbnails: { default: { url: string } };
        };
      }) => {
        const channel: Channel = {
          channelTitle: item.snippet.channelTitle,
          channelId: item.snippet.channelId,
          thumbnail: item.snippet.thumbnails.default.url,
        };
        newChannels.push(channel);
      },
    );
    setChanels(newChannels);
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
        Search
      </button>

      {chanels.map(item => {
        return [
          <div>
            <div className="toggler">
              <img src={item.thumbnail} alt="" />
            </div>
            <div>{item.channelTitle}</div>
          </div>,
        ];
      })}
    </div>
  );
};

export default Favourites;
