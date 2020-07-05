const db = require("../database");

const settingModel = {
  getLoginData: async where => await db("login").where('rowid', 1).then(res => res[0]),

  updateLoginData: async data => await db('login').where('rowid', 1).update(data).then(res => true),

  getGatewayData: async where => await db("gateway").where('rowid', 1).then(res => res[0]),

  updateGatewaytData: async data => await db('gateway').where('rowid', 1).update(data).then(res => true)
};

module.exports = settingModel;
