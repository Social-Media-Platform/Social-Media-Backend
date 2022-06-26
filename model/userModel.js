const pool = require('../db')

class Users {
    static async getUsersFromDB() {
        const sql = `SELECT * FROM users`;
        const dbResult = await pool.query(sql);
        return dbResult.rows;
    }

    static async getSpecificUser(user_id) {
        const sql = `SELECT * FROM users WHERE user_id = ($1)`;
        const dbResult = await pool.query(sql, [user_id]);
        return dbResult.rows[0];
    }

    static async getAllFriendsFromDB(user_id) {
        const sql = `
        SELECT users.*, friend_two FROM friends 
        JOIN users ON friends.friend_two = users.user_id 
        WHERE friend_one = ($1)`;
        const dbResult = await pool.query(sql, [user_id]);
        return dbResult.rows;
    }

    static async unFriendFromDB(user_id, friend_two) {
        const sql = `
        DELETE FROM friends WHERE friend_one = ($1) AND friend_two = ($2) 
        OR friend_two = ($1) AND friend_one = ($2) 
        RETURNING *`;
        const dbResult = await pool.query(sql, [user_id, friend_two]);
        return dbResult.rows[0];
    }

    static async addFriendFromDB(user_id, friend_two) {
        const sql = `
        INSERT INTO friends (friend_one, friend_two) 
        VALUES ($1, $2)  
        RETURNING *`;
        const dbResult = await pool.query(sql, [user_id, friend_two]);
        return dbResult.rows[0];
    }

    static async createUserFromDB(data) {
        const { username, hashedPassword, email } = data;
        const sql = `
        INSERT INTO users (username, password, email) 
        VALUES ($1, $2, $3) 
        RETURNING *`;
        const user = await pool.query(sql, [
            username,
            hashedPassword,
            email,
        ]);
        return user.rows;
    }

}

module.exports = Users