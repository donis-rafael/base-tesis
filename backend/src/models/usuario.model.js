const sequelize = require('sequelize');
const db = require('../config/db');
const Rol = require('../models/rol.model');

const Usuario = {};
Usuario.tabla = db.define("Usuario", {
    usuario_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    rol_id: {
        type: sequelize.INTEGER,
        references: 'Rol', // <<< Note, its table's name, not object name
        referencesKey: 'rol_id' // <<< Note, its a column name
    },
    nombre_programa_desarrollo: {
        type: sequelize.STRING
    },
    nombre_programa_desarrollo: {
        type: sequelize.STRING
    },
    nombre_programa_desarrollo: {
        type: sequelize.STRING
    }
}, {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,

    paranoid: false,

    // so updatedAt will be updated_at
    underscored: false,

    // disable the modification of tablenames to plural; 
    freezeTableName: true,

    // define the table's name
    tableName: 'Usuario'
});

Usuario.relacion = Rol.hasMany(Usuario.tabla);

module.exports = Usuario;