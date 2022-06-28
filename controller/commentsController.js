const CommentsModel = require("../model/commentsModel");

async function getAllComments(req, res) {
    try {
        const data = await CommentsModel.getAllCommentsFromDB();
        return res.status(200).json({
            data,
        });
    } catch (err) {
        return res.status(404).json({
            message: err.message,
        });
    }
}

async function getComments(req, res) {
    const post_id = req.params.id;

    if (!post_id) {
        return res.status(404).json({
            message: `POST WITH ID:${post_id} DOES NOT EXIST`,
        });
    }
    try {
        const data = await CommentsModel.getCommentsFromDB(post_id);
        return res.status(200).json({
            data,
        });
    } catch (err) {
        return res.status(404).json({
            message: err.message,
        });
    }
}

async function postComment(req, res) {
    const post_id = req.params.id;
    const { comment_body, user_id } = req.body;
    if (comment_body === '') return

    const postData = {
        comment_body,
        user_id,
        post_id,
    };

    if (!postData) {
        return res.status(400).json({
            message: "NO DATA IS BEING PROVIDED",
        });
    }
    try {
        const postInfo = await CommentsModel.postCommentFromDB(postData);
        return res.status(201).json({
            data: postInfo,
        });
    } catch (err) {
        return res.status(404).json({
            message: err.message,
        });
    }
}

async function deleteComment(req, res) {
    const comment_id = req.params.id;

    if (!comment_id) {
        return res.status(404).json({
            message: `COMMENT WITH ID: ${comment_id} DOES NOT EXIST`,
        });
    }
    try {
        const deleteInfo = await CommentsModel.deleteCommentFromDB(comment_id);
        return res.status(200).json({
            deleteInfo,
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message,
        });
    }
}

module.exports = {
    getAllComments,
    getComments,
    postComment,
    deleteComment
}