const sequelize = require('sequelize');
const db = require('../config/db');

const Cargo = db.define("Cargo", {
    cargo_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre_cargo: {
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
    tableName: 'Cargo'
});

module.exports = Cargo;