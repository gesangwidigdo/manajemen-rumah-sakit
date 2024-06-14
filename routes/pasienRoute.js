const express = require('express');
const router = express.Router();
const pasienController = require('../controllers/pasienController');

router.get('/', pasienController.getAllPasien);
router.get('/:id_pasien', pasienController.getPasienById);
router.post('/', pasienController.addPasien);

module.exports = router;