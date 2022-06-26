require('dotenv').config();
const postRouter = require('./routes/postRouter');
const userRouter = require('./routes/userRouter');
const profileRouter = require('./routes/profileRouter');
const chatRouter = require('./routes/chatRouter');
const http = require('http');
const {Server} = require('socket.io');

// Startup server
const express = require('express');
const cors = require('cors'); 
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET, POST']
    }
});

io.on('connection', socket => {
    socket.on('chat', payload => {
        socket.broadcast.emit('receive_message')
    })
});

// Middleware
app.use(express.json());
app.use(cors());

// Routers
app.use(postRouter);
app.use(userRouter);
app.use(profileRouter);
app.use(chatRouter);

// Configure Port
const PORT = 9001; 
app.listen(PORT, () => {
    console.log(`Listening on port ${ PORT }`)
});