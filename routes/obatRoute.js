const express = require('express');
const router = express.Router();
const obatController = require('../controllers/obatController');

router.get('/', obatController.getAllObat);
router.get('/:id_obat', obatController.getObatById);
router.post('/', obatController.addObat);
router.put('/:id_obat', obatController.updateObat);

module.exports = router;