const pool = require('../db')

class PostsModel{
    static async getAllPosts(){
        const sql = `select * from posts`

        const dbResult = await pool.query(sql);

        return dbResult.rows
    }

    static async getAllOfUsersPost(user_id){
        const sql = `select * from posts where user_id = ($1)`;

        const dbResult = await pool.query(sql,[user_id])

        return dbResult.rows[0]
    }

    static async findSpecificPost(post_id){
        const sql = `select * from posts where post_id = ($1)`;

        const dbResult = await pool.query(sql,[post_id])

        return dbResult.rows[0]
    }
        static async findPostByHashTag(hashtag){
            const sql = `select * from posts where hashtag = ($1)`;

            const dbResult = await pool.query(sql,[hashtag])

            return dbResult.rows
        }

    static async updatePost(post_id,description){

        const sql = `Update posts set description =($2) where post_id = ($1)`;

        const dbResult = await pool.query(sql,[post_id,description])

        return dbResult.rows
    }

    static async createPost(data){
        const sql = `insert into posts (post_id,hashtag,image,description, user_id) values ($1) returning *`;
    
        const dbResult = await pool.query(sql,[data])

        return dbResult.rows
    }

    static async deletePosts(post_id){
        if(!post_id) throw new Error(`NO post with the id of: ${post_id}`)
        
        const sql = `Delete from posts where post_id = ($1)`;

        const dbResult = await pool.query(sql,[post_id])

        console.log(`Post by the id of: ${post_id} has been deleted!`)
        
        return dbResult.rows[0]

    }
}

module.exports = PostsModel