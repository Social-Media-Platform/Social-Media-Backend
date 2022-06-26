const pool = require('../db');

class Profile {
    static async updateUserNameFromDB(user_id, newUserName) {
        const sql = `UPDATE users SET username = ($2) WHERE user_id = ($1) RETURNING *`;
        const dbResult = await pool.query(sql, [user_id, newUserName]);
        return dbResult.rows[0];
    }

    static async updateBioFromDB(user_id, newBio) {
        const sql = `UPDATE users SET bio = ($2) WHERE user_id = ($1) RETURNING *`;
        const dbResult = await pool.query(sql, [user_id, newBio]);
        return dbResult.rows[0];
    }
}

module.exports = Profile;