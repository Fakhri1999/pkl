const Perangkat = require("../models/Perangkat");

const perangkatController = {
  getAllPerangkat: async (req, res) => {
    let dataPerangkat = await Perangkat.getAllPerangkat();
    res.render("perangkat/list", {
      dataPerangkat
    });
  },

  createPerangkat: (req, res) => {
    res.render("perangkat/create");
  },

  addPerangkat: async (req, res) => {
    let inputData = req.body;
    let insertData = {
      id_perangkat: inputData.id,
      nama_perangkat: inputData.nama,
      deskripsi_perangkat: inputData.deskripsi,
      token: inputData.token
    };
    let result = await Perangkat.addPerangkat(insertData);
    res.redirect("/perangkat");
  },

  editPerangkat: async (req, res) => {
    let editData = await Perangkat.getSinglePerangkat(req.params.id);
    res.render("perangkat/edit", {
      editData: editData[0]
    });
  },

  updatePerangkat: async (req, res) => {
    let inputData = req.body;
    let id = req.params.id;
    let updateData = {
      id_perangkat: inputData.id,
      nama_perangkat: inputData.nama,
      deskripsi_perangkat: inputData.deskripsi,
      token: inputData.token
    };
    let result = await Perangkat.updatePerangkat(updateData, id);
    res.redirect("/perangkat");
  },

  deletePerangkat: async (req, res) => {
    let id = req.params.id;
    let result = await Perangkat.deletePerangkat(id);
    res.redirect("/perangkat");
  }
};

module.exports = perangkatController;
