const express = require('express');
const router = express.Router();
const resepController = require('../controllers/resepController');

router.get('/', resepController.getAllResep);
router.post('/', resepController.addResep);

module.exports = router;