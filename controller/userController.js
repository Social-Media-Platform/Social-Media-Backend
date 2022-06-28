const Users = require('../model/userModel');
const bcrypt = require('bcrypt')
const { generateToken, verifyToken } = require('../utils')
const saltRounds = 10
const pool = require('../db')

async function fetchUsers(req, res) {
    try {
        const data = await Users.getUsersFromDB();

        return res.json({
            data
        });
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
}

async function createUser(req, res) {
    const { username, password, email } = req.body
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    const userData = {
        username,
        hashedPassword,
        email,
    }

    if (!userData) {
        return res.status(400).json({
            message: 'NO USER INFO PROVIDED'
        })
    }
    try {
        const userInfo = await Users.createUserFromDB(userData)
        const token = await generateToken(userInfo.user_id)
        return res.status(201).json({
            userInfo,
            token
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;

        const user = await (await pool.query("SELECT * FROM users WHERE email = ($1)", [email])).rows[0];
        if (!user) {
            return res.status(401).json({
                message: "You sure you have the right email?",
            });
        }

        const passwordCorrect = await bcrypt.compare(password, user.password);
        if (!passwordCorrect) {
            return res.status(401).json({
                message: "You sure you have the right password?",
            });
        }
        const token = await generateToken(user.user_id);

        return res.status(200).json({
            user,
            token
        });

    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

async function authenticateUser(req, res) {
    try {
        const { userToken } = req.body;
        if (!userToken) return res.status(500).json({ message: 'NOT AUTHENTICATED' })
        const verify = await verifyToken(userToken, 'shhhhhhhhhhh');
        return res.status(200).json({ isAuth: true });
    } catch (err) {
        return res.status(404).json({ message: err.message });
    }
}

async function getUser(req, res) {
    const user_id = req.params.id;

    if (!user_id) {
        return res.status(400).json({
            message: `USER WITH ID: ${user_id} DOES NOT EXIST`
        });
    }
    try {
        const data = await Users.getSpecificUser(user_id);
        return res.status(200).json({
            data
        });
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
}

async function getAllFriends(req, res) {
    const user_id = req.params.id;

    try {
        const friends = await Users.getAllFriendsFromDB(user_id)
        return res.status(201).json([...friends])
    } catch (error) {
        res.statusCode = 200;
        res.json({
            message: error.message
        })
    }
}

async function unFriend(req, res) {
    const user_id = req.params.id;
    const { friend_two } = req.body;

    try {
        const data = await Users.unFriendFromDB(user_id, friend_two);
        return res.status(200).json({
            data,
        })
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}

async function addFriend(req, res) {
    const user_id = req.params.id;
    const { friend_two } = req.body;

    try {
        const data = await Users.addFriendFromDB(user_id, friend_two);
        return res.status(200).json({
            data,
        })
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}

module.exports = {
    fetchUsers,
    createUser,
    login,
    authenticateUser,
    getUser,
    getAllFriends,
    unFriend,
    addFriend,
};