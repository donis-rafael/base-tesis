const express = require('express');
const router = express.Router();

const reportes_controller = require('../controllers/reportesController');

router.get('/diario', reportes_controller.getReporteDiario);
router.get('/semanal', reportes_controller.getReporteSemanal);
router.get('/mensual', reportes_controller.getReporteMensual);

module.exports = router;
