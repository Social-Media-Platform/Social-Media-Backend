const commentRouter = require("express").Router();
const { getAllComments, getComments, postComment, deleteComment } = require("../controller/commentsController")

commentRouter.get("/comments", getAllComments)

commentRouter.get("/posts/:id/comments", getComments);

commentRouter.post("/posts/:id/comments", postComment);

commentRouter.delete("/comments/:id", deleteComment);

module.exports = commentRouter;
