const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const valuesNumber = require('../globalValues')

router.get("/getData/:email", function(req, res){
  req.app.locals.db
  .collection("users")
  .find({ email: req.params.email })
  .toArray(function (err, datas){
    if(err) {
      res.send({ error: true, content: error });
    } else{
      if (datas.length > 0){
        res.send(datas[0])
      }
    }
  }
)
})

router.post("/", function (req, res) {
  let bcryptPassword = bcrypt.hashSync(req.body.password, 10);
  req.app.locals.db
    .collection("users")
    .find({ email: req.body.email })
    .toArray(function (err, datas) {
      if (err) {
        res.send({ error: true, content: error });
      } else {
        if (datas.length === valuesNumber.first) {
          req.app.locals.db
            .collection("users")
            .insertOne(
              {
                email: req.body.email,
                password: bcryptPassword,
                name: req.body.name,
                subname: req.body.subname
              },
              function (err, data) {
                if (data.insertedId) {
                  res.send({
                    err: false,
                    content: {
                      answer: data,
                      message: "Usuario creado correctamente",
                    },
                  });
                } else {

                  res.send({ err: true, content: err });
                }
              }
            );
        } else {
          res.send({
            error: false,
            content: { message: "Este usuario ya está registrado" },
          });
        }
      }
    });
});

router.delete("/", function (req, res) {
  
  req.app.locals.db
    .collection("users")
    .deleteOne({ email: req.body.email}, function (err, datas) {
      if (datas.deletedCount === 0) {
        res.send({
          error: true,
          content: {
            answer: err,
            message:
              "Usuario no encontrado",
          },
        });
      } else {
        res.send({
          error: false,
          content: {
            answer: datas,
            message: "Usuario eliminado correctamente",
          },
        });
      }
    });
});

router.put("/", function (req, res) {
  let bcryptPassword = bcrypt.hashSync(req.body.password, 10);
  req.app.locals.db.collection("users").updateOne({ email: req.body.email }, { $set: { password: bcryptPassword, name: req.body.name, subname: req.body.subname } }, function (err, datas) {
    if (datas.modifiedCount === 1) {
      console.log(datas);
      res.send({ err: false, content: { answer: datas, message: "Usuario modificado correctamente" } });
    } else {
      res.send({ err: true, content: { answer: err, message: "Usuario no encontrado, los datos no son correctos" } })
    }
  });
});

module.exports = router;