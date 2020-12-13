/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Channel } from '../../Favourites';
import ChannelRow from '../channelrow';

interface ChannelsListProps {
  channels: Array<Channel>;
}

const ChannelList: React.FC<ChannelsListProps> = (props: ChannelsListProps) => {
  const { channels } = props;
  return (
    <div>
      {channels.map(channel => {
        return [<ChannelRow channel={channel} />];
      })}
    </div>
  );
};

export default ChannelList;
