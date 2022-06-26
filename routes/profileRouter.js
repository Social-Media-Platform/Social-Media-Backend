const profileRouter = require('express').Router();
const { updateUserName, updateBio, getProfile } = require('../controller/profileController')

profileRouter.get('/profile/:id', getProfile)

profileRouter.put('/profile/:id/bio', updateBio)

profileRouter.put('/profile/:id/username', updateUserName)

module.exports = profileRouter;