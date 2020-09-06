import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Messages from './Messages';
import Form from './Form';

const Chat = ({ activeTab }) => {
  const [messages, setMessages] = useState([]);
  const addMessage = useCallback((message) => {
    setMessages([message, ...messages]);
  }, [messages, setMessages]);

  return (
    <>
      <Messages messages={messages} activeTab={activeTab} />
      <Form addMessage={addMessage} />
    </>
  );
};

Chat.propTypes = {
  activeTab: PropTypes.number.isRequired,
};

export default Chat;
