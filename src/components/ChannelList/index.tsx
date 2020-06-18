import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Nome do Canal</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="Chat-Livre" />
      <ChannelButton channelName="Geral" />
      <ChannelButton channelName="Tributário" />
      <ChannelButton channelName="Fiscal" />
      <ChannelButton channelName="RH" />
      <ChannelButton channelName="Contábil" />
      <ChannelButton channelName="Happy Hour" />
      <ChannelButton channelName="Social" />
    </Container>
  );
};

export default ChannelList;