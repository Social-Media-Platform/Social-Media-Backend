require('dotenv').config();
const postRouter = require('./routes/postRouter');
const userRouter = require('./routes/userRouter');
const profileRouter = require('./routes/profileRouter');
const chatRouter = require('./routes/chatRouter');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const express = require('express');
const likeRouter = require('./routes/likesRouter');
const commentRouter = require('./routes/commentsRouter');
const feedRouter = require('./routes/feedRouter');

// Startup server
const app = express();

// Chat server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ["GET", "POST"]
  }
});

// Listens to connection
io.on("connection", socket => {
  console.log(socket.id);

  socket.on("chat", payload => {
    socket.broadcast.emit("receive_message");
  });

  socket.on("disconnect",() => {
    console.log("user disconnected", socket.id);
  });
});

// Middleware
app.use(express.json());
app.use(cors());

// Routers
app.use(postRouter);
app.use(userRouter);
app.use(profileRouter);
app.use(chatRouter);
app.use(likeRouter);
app.use(commentRouter);
app.use(feedRouter);

// Configure Port
const PORT = 9001;
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});