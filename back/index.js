const express = require("express");
const mongodb = require("mongodb");
const bcrypt = require("bcrypt");
const app = express();
const cors = require("cors")
const backRoutes = require("./routers/backRoutes")
const users = require("./routers/usersBack")
const puerto = process.env.PORT || 3000;
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");
const valuesNumber = require('./globalValues')
require("dotenv").config();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3001", credentials: true }));
app.use("/backRoutes", backRoutes)
app.use("/users", users)

let MongoClient = mongodb.MongoClient;

MongoClient.connect(process.env.MONGO_URL, function (err, client) {
  err ? console.log("🔴" + err) : (app.locals.db = client.db("recovery")),
    console.log("🟢 Conectado a MongoDB");
});

/* --------------------------PASSPORT----------------- */
app.use(
  session({
    secret: "patata", //secreto de la sesion (se puede hacer dinámico),
    resave: false, //Evita el reseteo de la sesión con cada llamada
    saveUninitialized: false, //Evita crear sesiones vacías
    store: MongoStore.create({
      //Nos guarda las sesiones en la colección "sesiones" en la base de datos "prueba"
      mongoUrl: process.env.MONGO_URL,
      dbName: "recovery",
      collectionName: "session",
      ttl: 1000 * 60 * 60 * 24,
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
app.use(cookieParser("patata"));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(req.session);
  console.log(req.user);
  next();
});

//------------------- Autorización y gestión de sesiones ----------

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      app.locals.db
        .collection("users")
        .findOne({ email: email }, function (err, user) {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false);
          }
          if (!bcrypt.compareSync(password, user.password)) {
            return done(null, false);
          }
          return done(null, user);
        });
    }
  )
);

passport.serializeUser(function (user, done) {
  console.log("-> Serialize");
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  console.log("-> Deserialize");
  app.locals.db
    .collection("users")
    .findOne({ email: user.email }, function (err, usuario) {
      if (err) {
        return done(err);
      }
      if (!usuario) {
        return done(null, null);
      }
      return done(null, usuario);
    });
});

//-------------------- LOGIN ------------------------------
app.post("/login", passport.authenticate("local", {
    successRedirect: "/api",
    failureRedirect: "/api/fail",
  })
);

app.all("/api", function (req, res) {
  // Utilizar .all como verbo => Las redirecciones desde un cliente Rest las ejecuta en POST, desde navegador en GET
  res.send({ logged: true, message: "Login correcto", user: req.user });
});

app.all("/api/fail", function (req, res) {
  res.send({ logged: false, message: "El usuario y/o la contraseña no son correctos" });
});

//-------------------- LOGOUT -----------------------------

app.post("/logout", function (req, res) {
  req.logOut();
  res.send({ message: "Logout Correcto", logout: true });
});

//-------------------- RUTAS ------------------------------

app.all("/perfil", function (req, res) {
  req.isAuthenticated()
    ? res.send({
      logged: true,
      message: "Todo correcto: información sensible",
      user: req.user,
    })
    : res.send({ logged: false, message: "Necesitas logearte. Denegado" });
});

/----------------CONNECTION-----------------/
app.listen(puerto, function (err) {
  err
    ? console.log("🔴 Servidor fallido")
    : console.log("🟢 Servidor a la escucha en el puerto:" + puerto);
});