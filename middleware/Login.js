const loginMiddleware = {
  isLoggedIn: (req, res, next) => {
    if (req.session.status) {
      next();
    } else {
      req.flash("status", "Silahkan login terlebih dahulu");
      res.redirect("/");
    }
  }
};

module.exports = loginMiddleware;
