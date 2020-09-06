import io from 'socket.io-client';

const socket = io('http://localhost:3337'); // TODO: to config
socket.on('connect', () => console.log('connect'));

export const send = ({ type, data }) => {
  socket.emit(type, data);
};

export const watch = ({ type, cb = () => {} }) => {
  socket.off(type); // in order to prevent memory leak

  socket.on(type, (data) => cb(data));
};
