require('dotenv').config();

var logger = require('morgan');
const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var routes_auth = require('./rotes/authRoutes');
var routes_admin = require('./rotes/adminRoutes');
var routes_reportes = require('./rotes/reportesRoutes');
var routes_consultas = require('./rotes/consultasRoutes');

app.use('/auth', routes_auth);
app.use('/admin', routes_admin);
app.use('/reportes', routes_reportes);
app.use('/consultas', routes_consultas);

app.listen(port, function () {
    console.log('Servidor corriendo en el puerto: ' + port);
});
