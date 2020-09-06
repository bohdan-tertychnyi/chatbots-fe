import io from 'socket.io-client';

const socket = io('http://localhost:3337'); // TODO: to config
socket.on('connect', () => console.log('connect'));

export const send = ({ type, data }) => {
  socket.emit(type, data);
};

export const watch = ({ type }) => { // TODO: use callback
  socket.on(type, (data) => {
    console.log(data);
  });
};
