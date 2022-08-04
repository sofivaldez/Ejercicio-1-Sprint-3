const express = require("express");
const userRouter = express.Router();
const methodOverride = require("method-override");
const { showRegister, create, showLogin, login, logout } = require("../controllers/userController");

userRouter.get("/register", showRegister);
userRouter.post("/register", create);
userRouter.get("/login", showLogin);
userRouter.post("/login", login);
// userRouter.get("/logout", logout);

module.exports = userRouter;
