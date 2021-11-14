const express = require("express");
const router = express.Router();

//Get para mostrar cartas en /cartas y poder mostrarlas en el menú Admin:
router.get('/', function (req, res) {
    // "let db = req.app.locals.db" es necesaria en cada método de la ruta para que funcione:
    let db = req.app.locals.db;
    db.collection('tienda.cartas').find().toArray(function (err, datos) {
        if (err != undefined) {
            console.log(err);
            res.send({ mensaje: 'error: ' + err });
        } else {
            //console.log(datos);
            res.send(datos);
        }
    });
});

router.post('/', function (req, res) {
    let db = req.app.locals.db;
    let nombreComic = req.body.nombre;
    let precioComic = req.body.precio;
    let imgComic = req.body.imagen;

    db.collection('tienda.cartas').insertOne({
        nombre: nombreComic,
        precio: precioComic,
        imagen: imgComic,
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

router.put('/put', function (req, res) {
    let db = req.app.locals.db;
    let nombreComic = req.body.nombre;
    let precioComic = req.body.precio;
    let imgComic = req.body.imagen;
    db.collection('tienda.cartas').updateMany(
        { nombre: nombreComic },
        { $set: { precio: precioComic, imagen: imgComic }, },
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
    let nombreComic = req.body.nombre;
    let precioComic = req.body.precio;
    let imgComic = req.body.imagen;
    db.collection('tienda.cartas').deleteOne(
        { nombre: nombreComic, precio: precioComic, imagen: imgComic },
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