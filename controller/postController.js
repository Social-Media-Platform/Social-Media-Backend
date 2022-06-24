const PostsModel = require('../model/postsModel')

async function fetchPost(req, res) {
    try {
        const data = await PostsModel.getAllPosts()

        res.json({
            data
        })
    } catch (err) {
        res.statusCode = 200;
        res.json({
            message: err.message
        })
    }
}
async function createPost(req, res) {
    const postData = {
        post_id,
        hashtag,
        image,
        description,
        user_id
    }
    if (!postData) {
        return res.status(400).json({
            message: 'You have to enter text'
        })
    }
    try {
        const postInfo = await PostsModel.createPost(postData)
        res.status(201).json({
            data: postInfo
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
async function deletePost(req, res) {
    const post_id = req.params.id

    const data = await PostsModel.findSpecificPost(post_id)

    if (!data) {
        res.status(404).json({
            message: `Couldn't find post`
        })
    }
    try {
        await PostsModel.deletePosts(post_id)
        return res.sendStatus(204)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })

    }
}

async function hashTagPost(req, res) {
    const hashtag = req.params.id

    if (!hashtag) {
        res.status(400).json({
            message: `No post with hashtag of ${hashtag}`
        });
    }
    try {
        const data = await PostsModel.findPostByHashTag(hashtag)
        res.status(200).json({
            data
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}


async function updatePosts(req, res) {
    const post_id = req.params.id
    const { description } = req.body

    if (!post_id) {
        res.status(404).json({
            message: `No post with the post id of: ${post_id}`
        })
    }
    try {
        const data = await PostsModel.updatePosts(post_id, description)
        res.status(200).json({
            data
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

async function getAllOfUsersPost(req, res) {
    const user_id = req.params.id

    if (!user_id) {
        res.status(404).json({
            message: `User ${user_id} doesn't have any post to show`
        })
    }
    try {
        const data = await PostsModel.getAllOfUsersPost(user_id)
        res.status(200).json({
            data
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}



module.exports = {
    fetchPost,
    createPost,
    getAllOfUsersPost,
    updatePosts,
    hashTagPost,
    deletePost
}