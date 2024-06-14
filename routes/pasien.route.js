const express = require('express');
const router = express.Router();
const pasienController = require('../controllers/pasienController');

router.get('/', pasienController.getAllPasien);
router.get('/:id_pasien', pasienController.getPasienById);

module.exports = router;