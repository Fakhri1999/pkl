const db = require("../database");

const loginModel = {
  login: async where => await db("login").where(where)
};

module.exports = loginModel;
