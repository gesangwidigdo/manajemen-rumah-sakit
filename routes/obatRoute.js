const express = require('express');
const router = express.Router();
const obatController = require('../controllers/obatController');

router.get('/', obatController.getAllObat);
router.get('/:id_obat', obatController.getObatById);
router.post('/', obatController.addObat);
router.put('/:id_obat', obatController.updateObat);
router.put('/stok/:id_obat', obatController.updateStokObat);

module.exports = router;