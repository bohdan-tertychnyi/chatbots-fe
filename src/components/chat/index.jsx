import React, {
  useEffect,
  useState,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import Messages from './Messages';
import Form from './Form';
import { handleBotResponse, BOTNAME_LIST } from '../../bots';

const initialMessagesMap = {};

BOTNAME_LIST.forEach((item) => {
  initialMessagesMap[item] = [];
});

const Chat = ({ activeTab }) => {
  const [messagesMap, setMessagesMap] = useState(initialMessagesMap);

  const messagesList = useCallback(
    (tab = activeTab) => messagesMap[tab] || [],
    [messagesMap, activeTab],
  );

  const addMessage = useCallback(({ message, tab = activeTab }) => {
    const prevMessagesLits = messagesList(tab);
    const nextMessagesList = ([message, ...prevMessagesLits]);
    const nextMessages = ({ ...messagesMap, [tab]: nextMessagesList });

    setMessagesMap(nextMessages);
  }, [messagesMap, messagesList, activeTab]);

  useEffect(() => {
    handleBotResponse({
      cb: (data) => {
        const { message: value, botId } = data;
        const message = { value, createTime: Date.now(), author: 'bot' };

        addMessage({ message, tab: botId });
      },
    });
  }, [addMessage]);

  return (
    <>
      <Messages messages={messagesList()} activeTab={activeTab} />
      <Form addMessage={addMessage} botId={activeTab} />
    </>
  );
};

Chat.propTypes = {
  activeTab: PropTypes.string.isRequired,
};

export default Chat;
