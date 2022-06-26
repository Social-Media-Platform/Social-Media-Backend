const chatRouter = require("express").Router();
const ChatController = require("../controller/chatController");

chatRouter.get("/users/:sender_id/chat/:receiver_id", ChatController.getChat);
chatRouter.post("/users/:sender_id/chat/:receiver_id", ChatController.createChat);

module.exports = chatRouter;