<<<<<<< HEAD
// const server = require('socket.io');
// import cors from 'cors'; 
=======
import { Server } from 'socket.io';
import cors from 'cors'; 
import { addUser, removeUser, getUser, getUsersInRoom } from './users';
>>>>>>> b60c773aed93c0210673febd7ea4f6cb7b3c2a88

// app.use(cors());

// function socketService () {

// const io = new Server(server, {
//     cors: {
//       origin: "http://localhost:3000",
//       methods: ["GET", "POST"],
//     },
//   });

<<<<<<< HEAD
//   io.on("connection", (socket) => {
//     console.log(`User Connected: ${socket.id}`);
  
//     socket.on("join_room", (data) => {
//       socket.join(data);
//       console.log(`User with ID: ${socket.id} joined room: ${data}`);
//     });
  
//     socket.on("send_message", (data) => {
//       socket.to(data.room).emit("receive_message", data);
//     });
  
//     socket.on("disconnect", () => {
//       console.log("User Disconnected", socket.id);
//     });
//   });
// }
=======
  io.on('connect', (socket) => {
    console.log('Welcome!');

    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        if (error) return callback(error);

        socket.emit('message', {
            user: 'admin',
            text: `${user.name}, Welcome to the room ${user.room}!`,
        });

        socket.broadcast.to(user.room).emit('message', {
            user: 'admin',
            text: `${user.name} has Joined.`,
        });

        socket.join(user.room);

        io.to(user.room).emit('roomData', {
            room: user.room,
            users: getUsersInRoom(user.room),
        });

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message });

        callback();
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if (user) {
            io.to(user.room).emit('message', {
                user: 'admin',
                text: `${user.name} has left.`,
            });
            io.to(user.room).emit('roomData', {
                room: user.room,
                users: getUsersInRoom(user.room),
            });
        }
    });
});
}
>>>>>>> b60c773aed93c0210673febd7ea4f6cb7b3c2a88

// export default socketService;