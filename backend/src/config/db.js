const { Sequelize } = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(process.env.BD_NAME, process.env.BD_USER, process.env.BD_PASS, {
  host: process.env.BD_SERVER_NAME,
  port: process.env.BD_PORT,
  dialect: process.env.BD_DIALECT,
  pool: {
    max: Number(String(process.env.BD_MAX)),
    min: Number(String(process.env.BD_MIN)),
    acquire: Number(String(process.env.BD_ACQUIRE)),
    idle: Number(String(process.env.BD_IDLE)),
  },
});

module.exports = sequelize;