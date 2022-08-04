const express = require("express");
const userRouter = express.Router();
const methodOverride = require("method-override");
const { showRegister, create, showLogin, login, logout } = require("../controllers/userController");

userRouter.get("/register", showRegister);
userRouter.post("/register", create);
userRouter.get("/login", showLogin);
userRouter.post("/login", login);
// userRouter.post("/logout", logout);
userRouter.post("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      return console.log(err);
    }
    res.redirect("/");
  });
});

module.exports = userRouter;
