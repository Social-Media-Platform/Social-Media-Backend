/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('comments', (table) => {
        table.increments('comment_id').primary();
        table.string('comment_body').notNullable()
        table.timestamp('time_posted').defaultTo(knex.fn.now())
        table.integer('user_id').notNullable().references('user_id').inTable('users')
        table.integer('post_id').notNullable().references('post_id').inTable('posts')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('comments')
};
