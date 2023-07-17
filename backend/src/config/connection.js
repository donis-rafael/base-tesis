const config = {};
require('dotenv').config();

config.conf = {
  user: process.env.BD_USER,
  password: process.env.BD_PASS,
  server: process.env.BD_SERVER_NAME, 
  database: process.env.BD_NAME,
  options: {
    trustedConnection: true,
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: true,
  }
};

module.exports = config;