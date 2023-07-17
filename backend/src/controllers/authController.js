const controller = {};
const helper = require('../config/helper');
const con = require('../config/connection');

const direccion = '**********/bd';
//const api = con(direccion);

controller.iniciarSesion = (req, res) => {
    const { token, usuario, contra } = req.body;

    res.status(200).json({
        mensaje: 'función que inicia sesión',
        content: req.body,
        otro: 'token: ' + token + ' - usuario: ' + usuario + ' - contra: ' + contra
    });
}

controller.registro = (req, res) => {
    const { nombre, usuario, contra } = req.body;

    res.status(200).json({
        mensaje: 'función que registra un nuevo usuario',
        content: req.body,
        otro: 'nombre: ' + nombre + ' - usuario: ' + usuario + ' - contra: ' + contra
    });
}

module.exports = controller;
