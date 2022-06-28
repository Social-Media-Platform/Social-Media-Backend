const FeedModel = require("../model/feedModel");

const getFeed = async (req, res) => {
    const feed = await FeedModel.getFeedFromDB()
    return res.status(200).json(feed)
}

const getLikes = async (req, res) => {
    const likes = await FeedModel.getLikesFromDB()
    return res.status(200).json(likes)
}

module.exports = {
    getFeed,
    getLikes
}