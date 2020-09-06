import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const Messages = ({ messages }) => (
  <div style={{ position: 'relative' }}>
    <div className="chat">
      {messages.map(({ value, createTime, author }) => <Message key={createTime} createTime={createTime} message={value} isFromUser={author === 'user'} />)}
    </div>
  </div>
);

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Messages;
