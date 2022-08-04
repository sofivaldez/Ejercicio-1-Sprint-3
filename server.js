require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const express = require("express");
const routes = require("./routes");
const dbInitialSetup = require("./dbInitialSetup");
const fs = require("fs-extra");
const { User } = require("./models");
const APP_PORT = process.env.APP_PORT || 3000;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(session({ secret: "AlgúnTextoSuperSecreto", resave: false, saveUninitialized: false }));
app.use(passport.session());
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      const user = await User.findOne({ where: { email: email } }, { raw: true });
      if (!user) {
        return done(null, false, { message: "Credenciales invalidas" });
      }
      // const compare = bcrypt.compare(password, user.password);

      if (user.password !== password) {
        return done(null, false, { message: "Credenciales invalidas" });
      }
      return done(null, user);
    },
  ),
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user); // Usuario queda disponible en req.user.
    })
    .catch((error) => {
      done(error, user);
    });
});

routes(app);

//Borra las imagenes que haya guardadas
fs.emptyDir("public/assets/img");

// dbInitialSetup(); // Crea tablas e inserta datos de prueba.

app.listen(APP_PORT, () => {
  console.log(`[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.`);
});
