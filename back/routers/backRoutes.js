const express = require("express");
const router = express.Router();
const valuesNumber = require('../globalValues')

router.get("/", function (req, res) {
    let db = req.app.locals.db;
    console.log(db);
    db.collection(valuesNumber.exercise)
        .find()
        .toArray(function (err, result) {
            if (err != undefined) {
                console.log(err);
            } else {
                if (result.length > valuesNumber.first) {
                    res.send({result})
                } else {
                    res.send({message:"No hay ejercicios"})
                }
            }
        })
})

module.exports = router;