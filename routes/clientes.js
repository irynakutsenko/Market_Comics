const express = require("express");
const router = express.Router();

router.post('/', function (req, res) {
    let db = req.app.locals.db;
    let nombreVar = req.body.nombre;
    let apellidoVar = req.body.apellido;
    let direccionVar = req.body.direccion;
    let cpVar = req.body.cp;
    let poblacionVar = req.body.poblacion;
    let paisVar = req.body.pais;
    let emailVar = req.body.email;
    let passwordVar = req.body.password;
    let adminVar = req.body.admin;

    db.collection('tienda.clientes').insertOne({
        nombre: nombreVar,
        apellido: apellidoVar,
        direccion: direccionVar,
        cp: cpVar,
        poblacion: poblacionVar,
        pais: paisVar,
        email: emailVar,
        password: passwordVar,
        admin: adminVar,
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

router.get('/', function (req, res) {
    // "let db = req.app.locals.db" es necesaria en cada método de la ruta para que funcione:
    let db = req.app.locals.db;
    db.collection('tienda.clientes').find().toArray(function (err, datos) {
        if (err != undefined) {
            console.log(err);
            res.send({ mensaje: 'error: ' + err });
        } else {
            //console.log(datos);
            res.send(datos);
        }
    });
});

//Admin pass
router.post('/', function (req, res) {
    let password = req.body.password;
    if (password == 'admin12345') {
        res.send(true);
    } else {
        res.send(false);
    }
})

router.put('/put', function (req, res) {
    let db = req.app.locals.db;
    let nombreCliente = req.body.nombre;
    let emailCliente = req.body.email;
    let passwordCliente = req.body.password;
    db.collection('tienda.clientes').updateMany(
        { nombre: nombreCliente },
        { $set: { email: emailCliente, password: passwordCliente }, },
        function (err, datos) {
            if (err !== undefined) {
                console.log(err);
                res.send({ mensaje: "error" + err });
            } else {
                res.send(datos);
            }
        })
})

router.delete('/delete', function (req, res) {
    let db = req.app.locals.db;
    let nombreCliente = req.body.nombre;
    let emailCliente = req.body.email;
    let passwordCliente = req.body.password;
    db.collection('tienda.clientes').deleteOne(
        { nombre: nombreCliente, email: emailCliente, password: passwordCliente },
        function (err, datos) {
            if (err !== undefined) {
                console.log(err);
                res.send({ mensaje: "error" + err });
            } else {
                res.send(datos);
            }
        })
})

module.exports = router;