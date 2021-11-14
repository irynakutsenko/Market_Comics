const express = require("express");
const router = express.Router();

router.post('/', function (req, res) {
    let nombreVar = req.body.nombre;
    let passwordVar = req.body.password;
    if (nombreVar == 'admin' && passwordVar == 'admin12345') {
        res.send(true);
    } else {
        res.send(false);
    }
})

router.get('/', function (req, res) {
    let db = req.app.locals.db;
    db.collection('tienda.login').find().toArray(function (err, datos) {
        if (err != undefined) {
            console.log(err);
            res.send({ mensaje: 'error: ' + err });
        } else {
            //console.log(datos);
            res.send(datos);
        }
    });
});

module.exports = router;