
const connectionURL = process.env.DATABASE_URL ? `${process.env.DATABASE_URL}?ssl=true` : `${require('./config.json')['DATABASE_URL']}?ssl=true`

var knex = require('knex')({
  client: 'pg',
  connection: connectionURL,
  searchPath: ['knex', 'public']
})

module.exports = knex
