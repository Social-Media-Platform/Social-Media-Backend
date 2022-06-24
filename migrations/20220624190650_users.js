/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('user_id').primary();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('email').notNullable();
        table.string('intro').defaultTo('Enter a short description')
        table.string('profile_pic').defaultTo("https://www.goodmorningimagesdownload.com/wp-content/uploads/2020/11/Nature-Whatsapp-DP-Profile-Images-Download-81.jpg")
        table.string('cover_pic').defaultTo("https://9cover.com/images/ccovers/1362683988simple-green-leaves.jpg");
        table.string('city').defaultTo('What city are you from')
        table.string('country').defaultTo('What country are you from')
        table.string('bio').defaultTo('Tell us more about yourself!')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('users')
};
