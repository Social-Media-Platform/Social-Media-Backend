const feedRouter = require("express").Router();
const { getFeed, getLikes } = require("../controller/feedController");

feedRouter.get("/feed", getFeed)

feedRouter.get("/likes", getLikes)

module.exports = feedRouter