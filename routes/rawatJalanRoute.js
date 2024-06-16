const express = require('express');
const router = express.Router();
const rawatJalanController = require('../controllers/rawatJalanController');

router.get('/', rawatJalanController.getAllRawatJalan);
router.get('/:id_rawat_jalan', rawatJalanController.getRawatJalanById);
router.post('/', rawatJalanController.addRawatJalan);
router.put('/:id_rawat_jalan', rawatJalanController.updateRawatJalan);

module.exports = router;