const profileRouter = require('express').Router();
const { updateUserName, updateBio } = require('../controller/profileController')

profileRouter.put('/profile/:id/bio', updateBio)

profileRouter.put('/profile/:id/username', updateUserName)

module.exports = profileRouter;