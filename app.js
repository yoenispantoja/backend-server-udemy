//Requires
var express = require('express');
var mongoose = require('mongoose');

//Inicialización de variables
var app = express();

//Conexión a la base de datos

mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Base de datos online');
});

//Rutas

app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    });
});

//Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server, puerto 3000 online');
});