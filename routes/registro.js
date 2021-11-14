const express = require("express");
const router = express.Router();

router.post('/', function (req, res) {
    let db = req.app.locals.db;
    let nombre = req.body.nombre;
    let email = req.body.email;
    let password = req.body.password;

    db.collection('tienda.clientes').insertOne({
        nombre: nombre,
        email: email,
        password: password,
    }, function (err, datos) {
        if (err != undefined) {
            console.log(err);
            res.send({ mensaje: 'error: ' + err });
        } else {
            //console.log(datos);
            res.send(datos);
        }
    })
})

module.exports = router;