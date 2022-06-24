const router = require('express').Router();;
const {fetchUsers,createUser,deleteUser,updateUserName,getUser,updateBio,updateFirstNameLastName,updateDisplayName} = require('../controller/userController')


router.get('/')

router.get('/users',fetchUsers);

router.get('/users/:id',getUser);

router.post('/users', createUser);

router.patch('/users/:id',updateBio)

router.patch('/users/:id',updateUserName)

router.patch('/users/:id',updateFirstNameLastName)

router.patch('/users/:id',updateDisplayName)

router.delete('/users/:id',deleteUser)

module.exports = router;