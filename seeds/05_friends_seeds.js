/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('friends').insert([
    { friend_one: 1, friend_two: 2 },
  ]);
};
