import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import Messages from './Messages';
import Form from './Form';
import { handleBotResponse } from '../../bots';

const Chat = ({ activeTab, bots }) => {
  const initialMessagesMap = useMemo(() => ({}), []);

  useEffect(() => {
    bots.forEach(({ name, messageHistory }) => {
      initialMessagesMap[name] = messageHistory;
    });
  }, [bots, initialMessagesMap]);

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
      <Messages bots={bots} messages={messagesList()} activeTab={activeTab} />
      <Form addMessage={addMessage} botId={activeTab} />
    </>
  );
};

Chat.propTypes = {
  activeTab: PropTypes.string.isRequired,
  bots: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Chat;
