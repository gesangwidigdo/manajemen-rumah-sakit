const express = require('express');
const router = express.Router();
const resepObatController = require('../controllers/resepObatController');

router.get('/', resepObatController.getAllResepObat);

module.exports = router;