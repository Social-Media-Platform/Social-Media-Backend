const pool = require("../db");

class CommentsModel {
    static async getAllCommentsFromDB() {
        const sql = `
        SELECT post_id, COUNT(user_id) AS commentCount
		FROM comments
        GROUP BY post_id`;
        const dbResult = await pool.query(sql);
        return dbResult.rows;
    }

    static async getCommentsFromDB(post_id) {
        if (!post_id) throw new Error(`POST WITH ID:${post_id} DOES NOT EXIST`);
        const sql = `
        SELECT comments.*, users.username, users.profile_pic 
        FROM comments 
        JOIN users ON comments.user_id = users.user_id
        WHERE post_id = ($1) 
        ORDER BY time_posted ASC`;
        const dbResult = await pool.query(sql, [post_id]);
        return dbResult.rows;
    }
    
    static async postCommentFromDB(data) {
        const { comment_body, user_id, post_id } = data;
        const sql = `
        INSERT INTO comments (comment_body, user_id, post_id) 
        VALUES ($1, $2, $3) 
        RETURNING *`;
        const dbResult = await pool.query(sql, [comment_body, user_id, post_id]);
        return dbResult.rows;
    }

    static async deleteCommentFromDB(comment_id) {
        if (!comment_id) throw new Error(`POST WITH ID: ${comment_id} DOES NOT EXIST`);
        const sql = `DELETE FROM comments WHERE comment_id = ($1)`;
        const dbResult = await pool.query(sql, [comment_id]);
        return dbResult.rows[0];
    }
}

module.exports = CommentsModel;