/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex ('friends').del()
  await knex('likes').del()
  await knex('comments').del()
  await knex('posts').del()
  await knex('users').del()
};