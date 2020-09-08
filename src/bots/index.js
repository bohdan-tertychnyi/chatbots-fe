import { send, watch } from '../sockets';
import config from '../config';

const { apiUrl } = config;

export const fetchBots = async () => {
  try {
    const bots = await fetch(`${apiUrl}/bots`);

    const response = await bots.json();

    return response;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Error: ', e);

    return undefined;
  }
};

export const requestBot = ({ botId, message }) => send({ type: 'request-bot', data: { botId, message } });

export const handleBotResponse = ({ cb }) => watch({ type: 'response-bot', cb });
