const LikeModel = require("../model/likesModel");

const getAllLikesFromSinglePost = async (req, res) => {
    try {
        const postID = req.params.id
        const getLikes = await LikeModel.getLikesFromDB(postID)
        return res.status(200).json(getLikes)
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
}

const addLikeOnPost = async (req, res) => {
    try {
        const postID = req.params.id
        const userID = req.body.user_id
        const createALike = await LikeModel.addLikeFromDB(userID, postID)
        return res.status(200).json(createALike)
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
};

const deleteLikeOnAPost = async (req, res) => {
    try {
        const postID = req.params.id
        const userID = req.body.user_id
        const deletedLike = await LikeModel.removeLikeFromDB(userID, postID)
        return res.status(201).json(deletedLike)
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
}

module.exports = {
    getAllLikesFromSinglePost,
    addLikeOnPost,
    deleteLikeOnAPost,
} 