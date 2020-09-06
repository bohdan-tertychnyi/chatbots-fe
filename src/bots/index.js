import { send, watch } from '../sockets';

export const BOTNAME_LIST = ['john_snow', 'martin', 'sherlock', 'monica', 'dallas'];

export const requestBot = ({ botId, message }) => send({ type: 'request-bot', data: { botId, message } });

export const handleBotResponse = ({ cb }) => watch({ type: 'response-bot', cb });
