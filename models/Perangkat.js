const db = require('../database')

const perangkatModel = {
  getAllPerangkat: async () => await db('perangkat').select('*', 'rowid'),

  addPerangkat: async (insertData) => await db('perangkat').insert(insertData).then(result => true),

  getSinglePerangkat: async (id) => await db('perangkat').select('*', 'rowid').where('rowid', id),

  updatePerangkat: async (updateData, id) => await db('perangkat').where('rowid', id).update(updateData).then(result => true),

  deletePerangkat: async (id) => await db('perangkat').where('rowid', id).delete()
}

module.exports = perangkatModel