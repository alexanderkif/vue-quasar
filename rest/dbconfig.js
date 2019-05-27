
const config = require('./config.json')

var knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL || config['DATABASE_URL'] + '?ssl=true',
  searchPath: ['knex', 'public']
})

module.exports = knex
