/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('users').insert([
    { username: 'jah123', password: '821', email: 'jah@gmail.com', intro: 'Gardens are dope', profile_pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUHd0asGDPWl3zSpRYDbGSTG2i-hEGkBD4kg&usqp=CAU", cover_pic:"https://cdn.images.express.co.uk/img/dynamic/143/590x/No-Man-s-Sky-gets-alternative-covers-689362.jpg"},
    { username: 'uzi123', password: '234', email: 'uzi@gmail.com', intro: 'Hello friends', profile_pic: "https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", cover_pic: "https://timelinecovers.pro/facebook-cover/download/Best-Covers-For-Facebook-Timeline-sunflower.jpg"},
  ]);
};
