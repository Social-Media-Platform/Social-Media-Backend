const userRouter = require('express').Router();
const { fetchUsers, getUser, getAllFriends, unFriend, addFriend, createUser, login, authenticateUser } = require('../controller/userController');

userRouter.get('/users', fetchUsers);

userRouter.post('/signup', createUser);

userRouter.post('/login', login);

userRouter.post('/authenticate', authenticateUser);

userRouter.get('/users/:id', getUser);

userRouter.get('/users/:id/friends', getAllFriends);

userRouter.delete('/users/:id/friends', unFriend);

userRouter.post('/users/:id/friends', addFriend);

module.exports = userRouter;