const loginModel = require("../models/Login");

const loginController = {
  showLogin: (req, res) => {
    if (req.session.status) {
      return res.redirect("/home");
    }

    res.render("login/login", {
      layout: false,
      message: req.flash("status")
    });
  },

  login: async (req, res) => {
    if (req.session.status) {
      return res.redirect("/home");
    }
    let { username, password } = req.body;
    let loginData = {
      username,
      password
    };

    let result = await loginModel.login(loginData);

    if (result.length) {
      req.session.status = true;
      res.redirect("/home");
    } else {
      req.flash("status", "Username / Password salah");
      res.redirect("/");
    }
  },

  logout: (req, res) => {
    if (!req.session.status) {
      req.flash("status", "Silahkan login terlebih dahulu");
      return res.redirect("/");
    }

    req.session.destroy();
    res.redirect("/");
  }
};

module.exports = loginController;
