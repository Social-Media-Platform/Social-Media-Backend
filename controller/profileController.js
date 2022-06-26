const Profile = require('../model/profileModel');

async function updateUserName(req, res) {
    const user_id = req.params.id;
    const { newUsername } = req.body;

    if (!user_id) {
        return res.status(404).json({
            message: `NO USER WITH ID: ${user_id} EXISTS`
        });
    }
    try {
        const data = await Profile.updateUserNameFromDB(user_id, newUsername);
        return res.status(200).json({
            data
        });
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
}

async function updateBio(req, res) {
    const user_id = req.params.id;
    const { newBio } = req.body;

    if (!user_id) {
        return res.status(404).json({
            message: `NO USER WITH ID: ${user_id} EXISTS`
        });
    }
    try {
        const data = await Profile.updateBioFromDB(user_id, newBio);
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
}


module.exports = {
    updateUserName,
    updateBio
};