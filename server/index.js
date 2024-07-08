import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors"



const app = express();
const PORT = 3000;
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors : {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket)=>{
   console.log(`User Connected : ${socket.id}`);

   socket.on("join_room", (data)=>{
    socket.join(data);
   })

   socket.on("send_message", (data)=>{
    socket.to(data.room).emit("receive_message",data)
   })
})

server.listen(PORT, ()=>{
    console.log(`Server running on port : ${PORT}`)
})
