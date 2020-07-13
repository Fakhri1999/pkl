const Perangkat = require('../models/Perangkat')

const homeController = {
  index: async (req, res) => {
    let data = await Perangkat.getAllPerangkat();
    res.render("home", {
      perangkatCount: data.length
    });
  }
};

module.exports = homeController;
