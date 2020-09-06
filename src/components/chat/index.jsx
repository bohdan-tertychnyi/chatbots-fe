import React, { useState, useCallback } from 'react';
import Messages from './Messages';
import Form from './Form';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const addMessage = useCallback((message) => {
    setMessages([message, ...messages]);
  }, [messages, setMessages]);

  return (
    <>
      <Messages messages={messages} />
      <Form addMessage={addMessage} />
    </>
  );
};

export default Chat;
