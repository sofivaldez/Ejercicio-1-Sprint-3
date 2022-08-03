const { Article, User, Comment } = require("../models");
const formidable = require("formidable");
const nodeMailer = require("nodemailer");
const slugify = require("slugify");
const format = require("date-fns/format");
const es = require("date-fns/locale/es")

let  largo = 3;

// Display a listing of the resource.
async function index(req, res) {
  const articles = await Article.findAll({
    include: User,
    order: [["createdAt", "DESC"]],
    limit: largo,
  });
  res.render("home", { articles});
}

async function loadOlderPosts(req, res){
  largo = largo + 3;
  res.redirect("back")
}

// Display the specified resource.
async function show(req, res) {
  const article = await Article.findByPk(req.params.id, {
    include: [{ model: User }, { model: Comment, include: [{ model: User }] }],
  });

  const users = await User.findAll();
  res.render("articles", { article, users, format, es });
}

// Show the form for creating a new resource
async function create(req, res) {
  const users = await User.findAll();
  res.render("createArticle", { users: users });
}

// Store a newly created resource in storage.
async function store(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/assets/img",
    keepExtensions: true,
  });

  form.parse(req, (err, fields, files) => {
    if (fields.title && fields.content && fields.userId && files.image.newFilename) {
      Article.create({
        title: fields.title,
        content: fields.content,
        userId: fields.userId,
        image: files.image.newFilename,
        urlSlug: slugify(fields.title, {
          replacement: "-",
          remove: undefined,
          lower: true,
          remove: /[.]/g,
        }),
      });
    }

    let transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "manuel.pererasb@gmail.com",
        pass: "nwwowanlfnuxembn",
      },
    });

    let mailOptions = {
      from: '"Ejercicio 21 - Blog" manuel.pererasb@gmail.com', // sender address
      to: ["manuel.perera@student.ha.dev", "nicoperdigon@gmail.com", "alankatz2000@gmail.com"], // list of receivers
      subject: "Alta de un nuevo articulo en la plataforma", // Subject line
      html: `<b>El siguiente artículo ha sido dado de alta:</b><br>
      <br>Título: ${fields.title}
      <br>Contenido: ${fields.content}`,
    };

    transporter.sendMail(mailOptions);
  });
  res.redirect("/admin");
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const article = await Article.findByPk(req.params.id);
  res.render("editArticle", { article });
}

// Update the specified resource in storage.
async function update(req, res) {
  const article = await Article.findByPk(req.params.id);
  article.update({
    title: req.body.title,
    content: req.body.content,
  });
  res.redirect("http://localhost:3000/admin");
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const article = await Article.findByPk(req.params.id);
  article.destroy();
  res.redirect("/admin");
}

//Create a comment for the specified article.
async function createComment(req, res) {
  Comment.create({ content: req.body.content, articleId: req.params.id, userId: req.body.userId });
  res.redirect(`back`);
}

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
  createComment,
  loadOlderPosts
};
