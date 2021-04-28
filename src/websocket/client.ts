import { Socket } from 'socket.io';
import { io } from '../http';

io.on('connection', (socket: Socket) => {
  socket.on('client_first_access', params => {
    console.log(params);
  });
});
