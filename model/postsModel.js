const pool = require("../db");

class PostsModel {
  static async getAllPostsFromDB() {
    const sql = `
    SELECT posts.*, users.profile_pic, users.username 
    FROM posts 
    JOIN users ON posts.user_id = users.user_id
    ORDER BY posts.time_posted DESC`;
    const dbResult = await pool.query(sql);
    return dbResult.rows;
  }

  static async getAllOfAUsersPostFromDB(user_id) {
    if (!user_id) throw new Error(`POSTS WITH ID:${user_id} DO NOT EXIST`);
    const sql = `
    SELECT posts.*, users.profile_pic, users.username
    FROM posts 
    JOIN users ON posts.user_id = users.user_id WHERE posts.user_id = ($1)
    ORDER BY posts.time_posted DESC`;
    const dbResult = await pool.query(sql, [user_id]);
    return dbResult.rows;
  }

  static async getSpecificPostFromDB(post_id) {
    if (!post_id) throw new Error(`POSTS WITH ID:${post_id} DO NOT EXIST`);
    const sql = `
    SELECT * FROM posts 
    WHERE post_id = ($1)`;
    const dbResult = await pool.query(sql, [post_id]);
    return dbResult.rows;
  }

  static async createPostFromDB(data) {
    const { hashtag, image, description, user_id, upload } = data;
    const sql = `
    INSERT INTO posts (hashtag, image, description, user_id, upload) 
    VALUES ($1, $2, $3, $4, $5) 
    RETURNING *`;
    const dbResult = await pool.query(sql, [
      hashtag,
      image,
      description,
      user_id,
      upload
    ]);
    return dbResult.rows;
  }

  static async deleteAPostFromDB(post_id) {
    if (!post_id) throw new Error(`POST WITH ID:${post_id} DOES NOT EXIST`);
    // Delete all comments where post is being referenced
    await pool.query(`DELETE FROM comments WHERE comments.post_id = ($1)`, [post_id]);
    // Delete actual post
    // await pool.query(`DELETE FROM bookmarks WHERE bookmarks.post_id = ($1)`, [post_id])
    await pool.query(`DELETE FROM likes WHERE likes.post_id = ($1)`, [post_id]);
    await pool.query(`DELETE FROM posts WHERE post_id = ($1)`, [post_id]);
  }

}

module.exports = PostsModel;
