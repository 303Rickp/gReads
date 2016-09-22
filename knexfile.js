// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/q2book'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  },
    migrations: {
      tableName: 'knex_migrations'
    }
};
