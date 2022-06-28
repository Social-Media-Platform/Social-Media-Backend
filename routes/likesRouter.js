const likeRouter = require("express").Router();
const { getAllLikesFromSinglePost, addLikeOnPost, deleteLikeOnAPost } = require("../controller/likeController")

likeRouter.get("/posts/:id/likes", getAllLikesFromSinglePost);

likeRouter.post("/posts/:id/likes", addLikeOnPost);

likeRouter.delete("/posts/:id/likes", deleteLikeOnAPost);

module.exports = likeRouter