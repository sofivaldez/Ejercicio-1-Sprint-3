const passport = require("passport");
const { User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Store a newly created resource in storage.
// async function logout(req, res) {
//   req.logout(function (err) {
//     if (err) {
//       return next(err);
//     }
//     res.redirect("/");
//   });
// }

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

module.exports = {
  index,
  update,
  destroy,
};
