const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: 'portal-web.db'
  },
  useNullAsDefault: true
})

knex.raw('SELECT 1+1 AS RESULT').then(() => console.log('Database connection success')).catch(error => console.log(error))

module.exports = knex