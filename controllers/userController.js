const passport = require("passport");
const { User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}
 
// Display the specified resource.
async function showLogin(req, res) {
  res.render("login");
}

// Show the form for creating a new resource
async function create(req, res) {
  const [user, created] = await User.findOrCreate({ where: { 
    firstname: req.body.firstname, 
    lastname: req.body.lastname, 
    email: req.body.email, password: 
    req.body.password},
  });

  if (created) {    
    req.login(user, () => res.redirect("/admin"));  
  } else {    
  res.redirect("/register");  
  }};


// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function login(req, res) {
  passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/login", 
  })
}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

async function showRegister(req, res) {
  res.render("register");
}

// Otros handlers...
// ...

module.exports = {
  login,
  index,
  showLogin,
  create,
  store,
  update,
  destroy,
  showRegister,
};
