import io from 'socket.io-client';

import config from '../config';

const { apiUrl } = config;

const socket = io(apiUrl);
socket.on('connect', () => console.log('connect'));

export const send = ({ type, data }) => {
  socket.emit(type, data);
};

export const watch = ({ type, cb = () => {} }) => {
  socket.off(type); // in order to prevent memory leak

  socket.on(type, (data) => cb(data));
};
