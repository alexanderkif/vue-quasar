
const knex = require('./dbconfig')
const TABLE = 'arts'

var arts = {
  getAllArts: () => {
    return knex(TABLE)
      .select('*')
  },

  getSingleArt: (id) => {
    return knex(TABLE)
      .select('*')
      .where({ id: parseInt(id) })
  },

  addArt: (art) => {
    return knex(TABLE)
      .insert(art)
      .returning('*')
  },

  updateArt: (id, art) => {
    return knex(TABLE)
      .update(art)
      .where({ id: parseInt(id) })
      .returning('*')
  },

  deleteArt: (id) => {
    return knex(TABLE)
      .del()
      .where({ id: parseInt(id) })
      .returning('*')
  }
}

module.exports = arts
