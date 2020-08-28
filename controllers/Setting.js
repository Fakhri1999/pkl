const settingModel = require("../models/Setting");

const settingController = {
  showLoginSetting: async (req, res) => {
    let data = await settingModel.getLoginData();
    res.render("setting/login", { data });
  },

  updateLoginSetting: async (req, res) => {
    let { username, password } = req.body;
    let updateData = {
      username,
      password
    };

    let result = await settingModel.updateLoginData(updateData);
    res.redirect("/setting/login");
  },

  showGatewaySetting: async (req, res) => {
    let data = await settingModel.getGatewayData();
    res.render("setting/gateway", { data });
  },

  updateGatewaySetting: async (req, res) => {
    let { device_id, access_token, topic } = req.body;
    let updateData = {
      device_id,
      access_token,
      topic
    };

    let result = await settingModel.updateGatewaytData(updateData);
    res.redirect("/setting/gateway");
  }
};

module.exports = settingController;
