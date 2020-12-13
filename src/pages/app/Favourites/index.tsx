/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

import youtubeApi from '../../../services/api';
import searchIcon from '../../../img/search.svg';

interface Channel {
  channelTitle: string;
  channelId: string;
  thumbnail: string;
}

const Favourites: React.FC = () => {
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
    <div className="search-page">
      <div className="search-form">
        <input
          className="input search-input"
          type="text"
          onChange={e => setKeyword(e.target.value)}
          placeholder=""
        />
        <div onClick={onSearch} className="search-button">
          <img className="search-image" src={searchIcon} alt="" />
        </div>
      </div>

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
