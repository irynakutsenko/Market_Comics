//////////////////////////////////////////////////
//        Organización de base de datos:        //
//////////////////////////////////////////////////
// Database: tienda                             
// Collections:                                 
// tienda.clientes {nombre, apellido, info}
// tienda.elementos {
// ..................tienda.elementos.comics
// ..................tienda.elementos.juegosCartas
// ..................tienda.elementos.juegosMesa
// ..................tienda.elementos.snacks }
// tienda.ventas
//
// Cada item que compras tiene un ID y cada compra venta en total tiene un ID agrupado. ID para cada pedido.
// 
// Hacer una colección nueva de ventas o compras con la compra de cada cliente y declarar esa entrada ->
// -> en una variable "ticket" que podamos usar para editar posteriormente.
// Por ejemplo, tienda.ventas, que al comprar el cliente tiene: {a, b, c}. Declaramos una variable que ->
// -> contenga esa entrada. Y usamos esa variable "ticket" para editar o mostrar las compras.

/* 1. Ver clientes:

for (i = 0; i = clientes.length; i++) {
    document.querySelector("/clientes[i]").innerHTML = `nombre: ${nombre}<br>apellido: ${apellido}<br>´;
}*/

const express = require('express');
const app = express();
const mongodb = require('mongodb');
let MongoClient = mongodb.MongoClient;
app.listen(3001);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());