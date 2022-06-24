const pool = require('../db')


class Users{
    static async findAllUsers(){
        const sql = `Select * FROM users`;

        const dbResult = await pool.query(sql);

        return dbResult.rows
    }

    static async getUserName(username){
        const sql = `Select * FROM users where username = ($1)`;

        const dbResult = await pool.query(sql,[username])

        return dbResult.rows[0]
    }

    static async getSpecificUser(user_id){
        const sql = `Select * FROM users where user_id = ($1)`;

        const dbResult = await pool.query(sql,[user_id])

        return dbResult.rows[0]
    }

    static async updateUserName(user_id,newUserName){
        const sql = `Update users set username = ($2) where user_id = ($1)`;

        const dbResult = await pool.query(sql,[user_id,newUserName])

        return dbResult.rows
    }

    static async updateEmail(username,newEmail){
        const sql = `Update users set email = ($2) where username = ($1)`;

        const dbResult = await pool.query(sql,[username,newEmail])

        return dbResult.rows
    }

    static async updateFirstNameLastName(username,newFirstNameLastName){
        const sql = `Update users set first_name = ($2) last_name = ($3) where username = ($1)`;

        const dbResult = await pool.query(sql,[username,newFirstNameLastName])

        return dbResult.rows
    }

    static async updateUserName(username,newUserName){
        const sql = `Update users set username = ($2) where username = ($1)`;

        const dbResult = await pool.query(sql,[username,newUserName])

        return dbResult.rows
    }

    static async updateDisplayName(username,newDisplayName){
        const sql = `Update users set display_name = ($2) where username = ($1)`;

        const dbResult = await pool.query(sql,[username,newDisplayName])

        return dbResult.rows
    }

    static async updateBio(username,newBio){
        const sql = `Update users set bio = ($2) where username = ($1)`;

        const dbResult = await pool.query(sql,[username,newBio])

        return dbResult.rows
    }

    static async createUser(data){
        const sql = `insert into users (user) values ($1) returning *`;

        const dbResult = await pool.query(sql,[data])

        return dbResult.rows
    }

    static async removeUser(user_id){
        if(!user_id) throw new Error(`No user found by the username of: ${user_id}`)

        const sql = `Delete from users where user_id = ($1)`;

        const dbResult = await pool.query(sql,[user_id])

        return dbResult.rows[0]
    }
}

module.exports = Users