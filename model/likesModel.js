const pool = require("../db");

class LikeModel {
    static async getLikesFromDB(post_id) {
        const sql = `
        SELECT COUNT(user_id) 
        FROM likes 
        WHERE post_id = ($1)`;
        const dbResult = await pool.query(sql, [post_id]);
        return dbResult.rows[0];
    }

    static async addLikeFromDB(user_id, post_id) {
        const sql = `
        INSERT INTO likes (user_id, post_id) 
        VALUES ($1, $2) 
        RETURNING *`;
        const dbResult = await pool.query(sql, [user_id, post_id]);
        return dbResult.rows[0];
    }

    static async removeLikeFromDB(user_id, post_id) {
        const sql = `
        DELETE FROM likes 
        WHERE user_id = ($1) AND post_id = ($2)
        RETURNING *`
        const dbResult = await pool.query(sql, [user_id, post_id])
        return dbResult.rows[0]
    }
}

module.exports = LikeModel