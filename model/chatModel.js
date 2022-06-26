const pool = require("../db");

class ChatModel {
    static async createChatFromDB(sender_id, receiver_id, message) {
        const sql = `
        INSERT INTO chats (sender_id, receiver_id, message) 
        VALUES ($1, $2, $3) 
        RETURNING *`;
        const dbResult = await pool.query(sql, [sender_id, receiver_id, message]);
        return dbResult.rows;
    }

    static async getChatFromDB(sender_id, receiver_id) {
        const sql = `
        SELECT * FROM chats 
        WHERE sender_id = ($1) AND receiver_id = ($2) 
        OR sender_id = ($2) AND receiver_id = ($1)`;
        const dbResult = await pool.query(sql, [sender_id, receiver_id]);
        return dbResult.rows;
    }
}

module.exports = ChatModel;