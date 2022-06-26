const postRouter = require("express").Router();
const {
  getAllPosts,
  getAllOfUsersPost,
  getComments,
  postComment,
  deleteComment,
  createPost,
  deleteAPost,
  addLike,
  deleteLike,
  getLikesForPost
} = require("../controller/postController");

postRouter.get("/posts", getAllPosts);

postRouter.get("/posts/:id", getAllOfUsersPost);

postRouter.get("/posts/:id/comments", getComments);

postRouter.post("/posts/:id/comments", postComment);

postRouter.delete("/comments/:id", deleteComment);

postRouter.post("/posts", createPost);

postRouter.delete("/posts/:id", deleteAPost);

postRouter.post("/posts/:id/likes", addLike);

postRouter.get("/posts/:id/likes", getLikesForPost)

postRouter.delete("/posts/:id/likes", deleteLike);

module.exports = postRouter;