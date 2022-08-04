const { Article, User } = require("../models");
let format = require("date-fns/format");

async function showJson(req, res) {
  const articles = await Article.findAll({ order: [["id", "ASC"]] });
  res.json(articles);
}

async function showAdmin(req, res) {
//  if (req.isAutenticated()) {
//   res.render("admin");

//  }
//  else {
//   res.redirect("/login");
//  }
  const articles = await Article.findAll({ include: User });
  res.render("admin", { articles, format });
}

module.exports = {
  showAdmin,
  showJson,
};
