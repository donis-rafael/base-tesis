const bcrypt = require('bcrypt');

const helpers = {}

helpers.encryptPassword = (contra) => {
    const salt = bcrypt.genSaltSync(10);
    const encripada = bcrypt.hashSync(contra, salt);
    return encripada;
}

helpers.comparaPassword = (contraActual, contraBd) => {
    return bcrypt.compareSync(contraActual, contraBd);
}

module.exports = helpers;