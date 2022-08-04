// const LocalStrategy = require("passport-local");
// const session = require("express-session");
// const passport = require("passport");

// app.use(session({ secret: "AlgúnTextoSuperSecreto", resave: false, saveUninitialized: false }));
// app.use(passport.session());
// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: "email",
//     },
//     async (email, password, done) => {
//       const user = await User.findOne({ where: { email: email } }, { raw: true });
//       if (!user) {
//         return done(null, false, { message: "Credenciales invalidas" });
//       }
//       // const compare = bcrypt.compare(password, user.password);

//       if (user.password !== password) {
//         return done(null, false, { message: "Credenciales invalidas" });
//       }
//       return done(null, user);
//     },
//   ),
// );

// passport.serializeUser(function (user, done) {
//   done(null, user.id);
// });
// passport.deserializeUser(function (id, done) {
//   User.findByPk(id)
//     .then((user) => {
//       done(null, user); // Usuario queda disponible en req.user.
//     })
//     .catch((error) => {
//       done(error, user);
//     });
// });
