const pool = require("../db");

class FeedModel {
    static async getFeedFromDB() {
        const sql = `
        SELECT posts.*, users.profile_pic, users.username 
        FROM posts 
        JOIN users ON posts.user_id = users.user_id
        ORDER BY posts.time_posted DESC`;
        const dbResult = await pool.query(sql)
        return dbResult.rows
    }

    static async getLikesFromDB() {
        const sql = `
        SELECT post_id, COUNT(user_id) AS likeCount
		FROM likes
        GROUP BY post_id`;
        const dbResult = await pool.query(sql)
        return dbResult.rows
    }
}

module.exports = FeedModel