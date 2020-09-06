import { send, watch } from '../sockets';

export const requestBot = ({ botId, message }) => send({ type: 'request-bot', data: { botId, message } });

export const handleBotResponse = () => watch({ type: 'response-bot' });

handleBotResponse();
