/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('posts').insert([
    {hashtag: 'Hope', image: 'https://www.unidosus.org/wp-content/uploads/2015/06/CommunityGarden_384.png', description: 'I love taking my son to these local gardens', user_id: 1},
    {hashtag: 'Love', image: 'https://i.guim.co.uk/img/media/57d54f2801b6dbbda1e9a3ebbdb61b4863a0451d/0_161_4928_2957/master/4928.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=bfb9446f2a66fc910a414c44b74ec72d', description: 'This has got to be the best garden I"ve ever visited', user_id: 2},
    // {hashtag: 'LiveGreen', image: 'https://www.signupgenius.com/cms/images/nonprofit/community-service-ideas.jpg', description: 'We need to take care of our planet so it can take care of us', user_id: 3},
    // {hashtag: 'LiveHealthy', image: 'https://www.cityofmalden.org/ImageRepository/Document?documentID=3469', description: 'The mission of the Malden Community Gardens is to empower residents of the City of Malden to become active stewards of a communal setting for growing their own produce and flowers. ', user_id: 4},
  ]);
};
