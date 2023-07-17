const express = require('express');
const router = express.Router();

const consultas_controller = require('../controllers/consultasController');

router.get('/consulta1', consultas_controller.getConsulta1);
router.get('/consulta1', consultas_controller.getConsulta2);
router.get('/consulta1', consultas_controller.getConsulta3);

module.exports = router;
