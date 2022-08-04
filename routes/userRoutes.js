const express = require("express");
const userRouter = express.Router();
const methodOverride = require("method-override");
const { showRegister, create, showLogin, login, logout } = require("../controllers/authController");

userRouter.get("/register", showRegister);
userRouter.post("/register", create);
userRouter.get("/login", showLogin);
userRouter.post("/login", login);
// userRouter.post("/logout", logout);
userRouter.post("/logout", logout);

module.exports = userRouter;
