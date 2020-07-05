const express = require("express");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");
const session = require("express-session");
const flash = require("connect-flash");
const morgan = require("morgan");
const PORT = process.env.PORT || 1231;
const perangkatRoute = require("./routes/Perangkat");
const settingRoute = require("./routes/Setting");
const loginController = require("./controllers/Login");
const homeController = require("./controllers/Home");
const { isLoggedIn } = require("./middleware/Login");

var hbs = exphbs.create({
  helpers: {
    inc: value => parseInt(value) + 1
  }
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "portal-web",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);
app.use(flash());
// app.use(morgan("tiny"));

app.use("/perangkat", isLoggedIn, perangkatRoute);
app.use("/setting", isLoggedIn, settingRoute);
app.get("/", loginController.showLogin);
app.post("/", loginController.login);
app.get("/logout", loginController.logout);
app.get("/home", isLoggedIn, homeController.index);

// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Server is running",
//     status: req.session.status == null ? "Not logged in" : "Logged in"
//   });
// });

app.use(express.static(path.join(__dirname, "public")));
app.use(function(req, res, next) {
  res.status(404).render("404", {
    layout: false
  });
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
