const PostsModel = require("../model/postsModel");

async function getAllPosts(req, res) {
  try {
    const data = await PostsModel.getAllPostsFromDB();
    return res.json({
      data,
    });
  } catch (err) {
    return res.status(404).json({
      message: err.message,
    });
  }
}

async function getAllOfUsersPost(req, res) {
  const user_id = req.params.id;

  if (!user_id) {
    return res.status(404).json({
      message: `POSTS WITH ID:${user_id} DOES NOT EXIST`,
    });
  }
  try {
    const data = await PostsModel.getAllOfAUsersPostFromDB(user_id);
    return res.status(200).json({
      data,
    });
  } catch (err) {
    return res.status(404).json({
      message: err.message,
    });
  }
}

async function getSpecificPost(req, res) {
  const post_id = req.params.id;

  if (!post_id) {
    return res.status(404).json({
      message: `POSTS WITH ID:${post_id} DOES NOT EXIST`,
    });
  }
  try {
    const data = await PostsModel.getSpecificPostFromDB(post_id);
    return res.status(200).json({
      data,
    });
  } catch (err) {
    return res.status(404).json({
      message: err.message,
    });
  }
}

async function createPost(req, res) {
  const { hashtag, image, description, user_id, upload } = req.body;
  const postData = {
    hashtag,
    image,
    description,
    user_id,
    upload
  };

  if (!postData) {
    return res.status(404).json({
      message: "NO DATA IS BEING PROVIDED",
    });
  }
  try {
    const postInfo = await PostsModel.createPostFromDB(postData);
    return res.status(201).json({
      data: postInfo,
    });
  } catch (err) {
    return res.status(404).json({
      message: err.message,
    });
  }
}

async function deleteAPost(req, res) {
  const post_id = req.params.id;

  try {
    await PostsModel.deleteAPostFromDB(post_id);
    return res.send(`SUCCESSFULLY DELETED POST WITH ID: ${post_id}`).status(204);
  } catch (err) {
    return res.status(404).json({
      message: err.message,
    });
  }
}

module.exports = {
  getAllPosts,
  getSpecificPost,
  getAllOfUsersPost,
  createPost,
  deleteAPost,
};
