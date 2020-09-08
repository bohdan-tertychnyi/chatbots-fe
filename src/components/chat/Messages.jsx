import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const COLOR_LIST = [
  'linear-gradient(0.08deg, #607D8B 0.09%, #90A4AE 99.95%)',
  'linear-gradient(0.08deg, #f99300 0.09%, #ded103 99.95%)',
  'linear-gradient(0.08deg, #7490de 0.09%, #dc0ad2 99.95%)',
  'linear-gradient(0.08deg, #74bdde 0.09%, #110adc 99.95%)',
  'linear-gradient(0.08deg, #de747a 0.09%, #dcb20a 99.95%)',
];

const Messages = ({ activeTab, messages, bots = [] }) => {
  const bot = bots.find(({ name }) => name === activeTab);
  const botIndex = bot && bots.findIndex(({ name }) => bot.name === name);

  const imgSrc = bot && bot.icon;
  const background = useMemo(() => COLOR_LIST[botIndex], [botIndex]);

  return (
    <div style={{ position: 'relative' }}>
      <div className="chat" style={{ background }}>
        {messages.map(({ value, createTime, author }) => <Message key={createTime} createTime={createTime} message={value} isFromUser={author === 'user'} imgSrc={imgSrc} />)}
      </div>
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    createTime: PropTypes.number.isRequired,
    author: PropTypes.oneOf(['user', 'bot']).isRequired,
  })).isRequired,
  activeTab: PropTypes.string.isRequired,
  bots: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Messages;
