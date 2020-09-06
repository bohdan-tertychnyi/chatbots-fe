import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import Messages from './Messages';
import Form from './Form';

const Chat = ({ activeTab }) => {
  const [messagesMap, setMessagesMap] = useState({});

  const messagesList = useMemo(() => messagesMap[activeTab] || [], [messagesMap, activeTab]);

  const nextMessages = useCallback(
    (message) => ({ ...messagesMap, [activeTab]: [message, ...messagesList] }),
    [activeTab, messagesList, messagesMap],
  );

  const addMessage = useCallback((message) => {
    setMessagesMap(nextMessages(message));
  }, [setMessagesMap, nextMessages]);

  return (
    <>
      <Messages messages={messagesList} activeTab={activeTab} />
      <Form addMessage={addMessage} />
    </>
  );
};

Chat.propTypes = {
  activeTab: PropTypes.number.isRequired,
};

export default Chat;
