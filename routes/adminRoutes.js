const express = require("express");
const adminRouter = express.Router();
const methodOverride = require("method-override");

const pagesController = ({ showJson, createComment } = require("../controllers/pagesController"));
const articleController = ({
  create,
  store,
  edit,
  update,
  destroy,
} = require("../controllers/articleController"));

adminRouter.use(methodOverride("_method"));

adminRouter.get("/", pagesController.showAdmin);

adminRouter.get("/delete/:id", articleController.destroy);

adminRouter.get("/create", articleController.create);

adminRouter.post("/create", articleController.store);

adminRouter.get("/edit/:id", articleController.edit);

adminRouter.post("/edit/:id", articleController.update);

module.exports = adminRouter;
