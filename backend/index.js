import express from "express"
import connect from "./db/connectdb.js";
import router from "./routes/web.js"
import bodyParser from "body-parser"
import cors from "cors"
import { Server as SocketIo } from 'socket.io';
const app=express()
const port=process.env.PORT||3002;
const DATABASE_URI=process.env.DATABASE_URI||"mongodb://127.0.0.1:27017"

//CORS
app.use(cors());

//database connection
connect(DATABASE_URI);

//to take data using parser
app.use(bodyParser.json());

//load router
app.use("/",router)

const server = app.listen(port,()=>{
    console.log("listening to the server")
})

const io = new SocketIo(server, {
    pingTimeout: 60000,
    cors: {
      origin: "http://localhost:5173",
      // credentials: true,
    },
  });


  const userSockets = {};

  io.on('connection', (socket) => {

    socket.on('user-connect', ({ username }) => {
      userSockets[username] = socket.id;
      console.log(`User ${username} connected`);
    });

    socket.on('onscann',(data)=>{
        console.log(data);
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