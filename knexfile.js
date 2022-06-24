require('dotenv').config()
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'social_mediadb',
      user:     'postgres',
      password: '1'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
