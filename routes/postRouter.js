const router = require('express').Router();;
const {fetchPost,createPost,getAllOfUsersPost,hashTagPost,deletePost, updatePosts} = require('../controller/postController')

router.get('/posts', fetchPost);

router.get('/posts/:id', getAllOfUsersPost);

router.get('/posts/:id', hashTagPost);

router.post('/posts', createPost);

router.patch('/posts/:id', updatePosts);

router.delete('/posts/:id', deletePost);




module.exports = router