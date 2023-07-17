const controller = {};
const helper = require('../config/helper');

/* EJEMPLO DE CONEXIÓN CON QUERYS
const con = require('../config/connection');
const sql = require("mssql");

controller.getIngenios = (req, res) => {

    //var request = new Request("SELECT c.CustomerID, c.CompanyName,COUNT(soh.SalesOrderID) AS OrderCount FROM SalesLT.Customer AS c LEFT OUTER JOIN SalesLT.SalesOrderHeader AS soh ON c.CustomerID = soh.CustomerID GROUP BY c.CustomerID, c.CompanyName ORDER BY OrderCount DESC;", function(err) {  
    // connect to your database
    /*console.log(con.conf);
    sql.connect(con.conf, function (err) {

        if (err) console.log(err);

        // crea objeto tipo Request
        var request = new sql.Request();

        console.log("REQUEST");

        // query a la base de datos
        request.query('SELECT * FROM Ingenio;', function (err, recordset) {

            if (err) console.log(err)

            res.send(recordset);
            /*
            RESPUESTA recordset:
            {
                "recordsets": [
                    [
                        {
                            "ingenio_id": 1,
                            "nombre_ingenio": "Magdalena"
                        }
                    ]
                ],
                "recordset": [
                    {
                        "ingenio_id": 1,
                        "nombre_ingenio": "Magdalena"
                    }
                ],
                "output": {},
                "rowsAffected": [
                    1
                ]
            }
            *

        });
    });
    /*

    res.status(200).json({
        mensaje: 'función que obtiene todos los ingenios',
        content: respuesta
    });
}*/

const Ingenio = require('../models/ingenio.model');
const Cargo = require('../models/cargo.model');
const Rol = require('../models/rol.model');
const Prog_Desarrollo = require('../models/fase.desarrollo.model');
const sequelize = require('sequelize');
const Op = sequelize.Op;

controller.getIngenios = (req, res) => {

    //const title = req.query.title;
    //var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Ingenio.findAll()//{ where: condition })
        .then(data => {
            if (data.length > 0) {
                console.log("data: " + data);
                console.log("data.length: " + data.length);
                console.log("data[0].ingenio_id: " + data[0].ingenio_id);
                console.log("data[0].nombre_ingenio: " + data[0].nombre_ingenio);
            } else {
                data = {
                    respuesta: 'sin datos'
                }
            }
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al consultar Ingenios."
            });
        });

}

controller.setIngenio = (req, res) => {

    // Valida información del Request
    if (!req.body.nombre) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { nombre } = req.body;

    // Crea Ingenio
    const ingenio = {
        nombre_ingenio: nombre
    };

    // Guarda el Ingenio en la BD
    Ingenio.create(ingenio)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocurrió un error al almacenar el Ingenio.",
                error: err.name
            });
        });
}

controller.getFincas = (req, res) => {
    res.status(200).json({
        mensaje: 'función que obtiene todas las fincas',
        content: ['Finca1', 'Finca2', 'Finca3']
    });
}

controller.setFinca = (req, res) => {
    const { nombre, ingenio } = req.body;

    res.status(200).json({
        mensaje: 'función que almacena una nueva finca',
        content: req.body,
        otro: 'nombre: ' + nombre + ' - ingenio: ' + ingenio
    });
}

controller.getFrentes = (req, res) => {
    res.status(200).json({
        mensaje: 'función que obtiene todos los frentes',
        content: ['Frente1', 'Frente2', 'Frente3']
    });
}

controller.setFrente = (req, res) => {
    const { nombre, finca, ingenio } = req.body;

    res.status(200).json({
        mensaje: 'función que almacena un nuevo frente',
        content: req.body,
        otro: 'nombre: ' + nombre + ' - finca: ' + finca + ' - ingenio: ' + ingenio
    });
}

controller.getUsuarios = (req, res) => {
    res.status(200).json({
        mensaje: 'función que obtiene todos los usuarios',
        content: ['Usuario1', 'Usuario2', 'Usuario3']
    });
}

controller.setUsuario = (req, res) => {
    const { nombre, usuario, contra } = req.body;

    res.status(200).json({
        mensaje: 'función que almacena un nuevo usuario',
        content: req.body,
        otro: 'nombre: ' + nombre + ' - usuario: ' + usuario + ' - contra: ' + contra
    });
}

controller.getRoles = (req, res) => {
    Rol.findAll()//{ where: condition })
        .then(data => {
            if (data.length > 0) {
                console.log("data: " + data);
                console.log("data.length: " + data.length);
                console.log("data[0].rol_id: " + data[0].rol_id);
                console.log("data[0].nombre_rol: " + data[0].nombre_rol);
            } else {
                data = {
                    respuesta: 'sin datos'
                }
            }
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al consultar Ingenios."
            });
        });
}

controller.setRol = (req, res) => {
    // Valida información del Request
    if (!req.body.nombre) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { nombre } = req.body;

    // Crea Rol
    const rol = {
        nombre_rol: nombre
    };

    // Guarda el Rol en la BD
    Rol.create(rol)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocurrió un error al almacenar el Rol.",
                error: err.name
            });
        });
}

controller.getCargos = (req, res) => {
    Cargo.findAll()//{ where: condition })
        .then(data => {
            if (data.length > 0) {
                console.log("data: " + data);
                console.log("data.length: " + data.length);
                console.log("data[0].cargo_id: " + data[0].cargo_id);
                console.log("data[0].nombre_cargo: " + data[0].nombre_cargo);
            } else {
                data = {
                    respuesta: 'sin datos'
                }
            }
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al consultar Ingenios."
            });
        });
}

controller.setCargo = (req, res) => {
    // Valida información del Request
    if (!req.body.nombre) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { nombre } = req.body;

    // Crea Cargo
    const cargo = {
        nombre_cargo: nombre
    };

    // Guarda el Cargo en la BD
    Cargo.create(cargo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocurrió un error al almacenar el Cargo.",
                error: err.name
            });
        });
}

controller.getProgramasDesarrollo = (req, res) => {
    Prog_Desarrollo.findAll()//{ where: condition })
        .then(data => {
            if (data.length > 0) {
                console.log("data: " + data);
            } else {
                data = {
                    respuesta: 'sin datos'
                }
            }
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al consultar Programa de Desarrollo."
            });
        });
}

module.exports = controller;