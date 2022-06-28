const postRouter = require("express").Router();
const {
  getAllPosts,
  getAllOfUsersPost,
  createPost,
  deleteAPost,
  getSpecificPost
} = require("../controller/postController");

postRouter.get("/posts", getAllPosts);

postRouter.get("/posts/:id", getAllOfUsersPost);

postRouter.get("/spPost/:id", getSpecificPost)

postRouter.post("/posts", createPost);

postRouter.delete("/posts/:id", deleteAPost);

module.exports = postRouter;