import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

import { routes } from './routes';

import './database';

const app = express();

const http = createServer(app);

const io = new Server(http);

io.on('connection', (socket: Socket) => {
  console.log('Connected => ', socket.id);
});

app.use(express.json());

app.use(routes);

http.listen(3333, () => console.log('Server is running on port 3333'));
