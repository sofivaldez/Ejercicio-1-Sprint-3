const passport = require("passport");
const { User } = require("../models");

// Display the specified resource.
async function showLogin(req, res) {
  res.render("login");
}

// Show the form for creating a new resource
async function create(req, res) {
  const [user, created] = await User.findOrCreate({
    where: {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    },
  });

  if (created) {
    req.login(user, () => res.redirect("/admin"));
  } else {
    res.redirect("/register");
  }
}

// Show the form for editing the specified resource.
async function login(req, res) {
  return passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/login",
  })(req, res);
}

async function showRegister(req, res) {
  res.render("register");
}

async function logout(req, res) {
  req.logout(function (err) {
    if (err) {
      return console.log(err);
    }
    res.redirect("/");
  });
}
// Otros handlers...
// ...

module.exports = {
  showLogin,
  create,
  login,
  showRegister,
  logout,
};
