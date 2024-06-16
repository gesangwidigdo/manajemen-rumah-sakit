const express = require('express');
const router = express.Router();
const resepObatController = require('../controllers/resepObatController');

router.get('/', resepObatController.getAllResepObat);
router.get('/:id_resep', resepObatController.getResepObatByIdResep);

module.exports = router;