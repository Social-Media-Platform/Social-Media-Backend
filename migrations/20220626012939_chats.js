/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('chats', function (table) {
            table.increments();
            table.integer('sender_id').notNullable().references('user_id').inTable('users');
            table.integer('receiver_id').notNullable().references('user_id').inTable('users');
            table.string('message');
            table.timestamp('time_posted').defaultTo(knex.fn.now());
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('chats');
};
