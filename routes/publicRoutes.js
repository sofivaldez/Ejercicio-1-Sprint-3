const express = require("express");
const publicRouter = express.Router();
const pagesController = ({ showJson } = require("../controllers/pagesController"));
const articleController = ({
  index,
  show,
  createComment,
  loadOlderPosts
} = require("../controllers/articleController"));
const methodOverride = require("method-override");
publicRouter.use(methodOverride("_method"));


publicRouter.get("/", articleController.index);
publicRouter.get("/loadOlderPosts", articleController.loadOlderPosts);
publicRouter.get("/article/:id/:slug", articleController.show);
publicRouter.post("/article/:id/createComment", articleController.createComment);
publicRouter.get("/api/articulos", pagesController.showJson);


module.exports = publicRouter;
