const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const {addUser, removeUser, getUser, getUsersInRoom} = require('./users');
const PORT = process.env.PORT || 5000

const router = require('./router');
const { emit } = require('process');

const app = express();
const server = http.createServer(app);
const io = socketio(server);


io.on('connection', (socket) => {
    socket.on('join', ({name, room}, callback) => {
        const{error, user} = addUser({ id: socket.id, name, room});

        if(error){
            return callback(error)
        }

        // to user 
        socket.emit('newMessage', {user: 'admin', text: `${user.name} welcome to ${user.room}`});
        
        // to everyone but the user who joined
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name}, has joined`})


        socket.join(user.room);

        callback();
    })

    //wait for messages
    socket.on('sendMessage', (message , callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', {user: user.name, text: message});

        callback();
    })

    socket.on('disconnect', () => {
        console.log('User left');
    });
});



app.use(router)

server.listen(PORT, () => console.log(`Server is up at ${PORT}`));