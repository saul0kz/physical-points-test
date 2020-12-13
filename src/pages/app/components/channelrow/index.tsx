/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Channel } from '../../Favourites';
import whiteStar from '../../../../img/white-star.svg';

interface ChannelsRowProps {
  channel: Channel;
}

const ChannelRow: React.FC<ChannelsRowProps> = (props: ChannelsRowProps) => {
  const { channel } = props;
  return (
    <div className="channel-row">
      <div className="tumb-container">
        <img className="tumb" src={channel.thumbnail} alt="" />
      </div>
      <div className="channel-title">{channel.channelTitle}</div>
      <div className="favourite-button">
        <img src={whiteStar} alt="" />
      </div>
    </div>
  );
};

export default ChannelRow;
