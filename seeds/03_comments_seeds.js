/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('comments').insert([
    { comment_body: `They are my favorite thing to visit whenever I'm back home`, user_id: 1, post_id: 1 },
    { comment_body: `Isn't there a farmer's market near by too?`, user_id: 2, post_id: 1 },
    { comment_body: `YES, they have the freshest vegetables you can find!`, user_id: 1, post_id: 2 },
    { comment_body: `Looking forward to going there soon`, user_id: 2, post_id: 2 },
  ]);
};
