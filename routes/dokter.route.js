const express = require('express');
const router = express.Router();
const dokterController = require('../controllers/dokterController');

router.post('/create', dokterController.addData, (req, res) => {
    res.status(201).json(req.createdDokter);
});

module.exports = router;