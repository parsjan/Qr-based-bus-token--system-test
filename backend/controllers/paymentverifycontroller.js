import  http from "http"
import express from "express"
import { Server as SocketIo } from 'socket.io';
import cors from "cors"

const app = express();
const server = http.createServer(app);
const io = new SocketIo(server);

// Mapping of usernames to socket IDs
const userSockets = {};

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('user-connect', ({ username }) => {
    userSockets[username] = socket.id;
    console.log(`User ${username} connected`);
  });

   socket.on('onscann',({data})=>{
           console.log(data.result);
           const userSocketId= userSockets[data.result.passanger]
           if(userSocketId){
            io.to(userSocketId).emit('processing')
           }
   })

  socket.on('admin-scan', ({ result }) => {
    const userSocketId = userSockets[result.passanger];
    if (userSocketId) {

      io.to(userSocketId).emit('payment-complete');
    } else {
      console.log(`User ${username} not connected`);
    }
  });

  socket.on('disconnect', () => {
    for (let username in userSockets) {
      if (userSockets[username] === socket.id) {
        delete userSockets[username];
        console.log(`User ${username} disconnected`);
        break;
      }
    }
  });
});

server.listen(3003, () => {
  console.log('Server running on http://localhost:3003');
});

