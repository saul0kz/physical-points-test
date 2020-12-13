/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Channel } from '../../Favourites';

interface ChannelsRowProps {
  channel: Channel;
}

const ChannelRow: React.FC<ChannelsRowProps> = (props: ChannelsRowProps) => {
  const { channel } = props;
  return (
    <div>
      <div className="toggler">
        <img src={channel.thumbnail} alt="" />
      </div>
      <div>{channel.channelTitle}</div>
    </div>
  );
};

export default ChannelRow;
