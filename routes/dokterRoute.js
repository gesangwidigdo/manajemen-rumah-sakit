const express = require('express');
const router = express.Router();
const dokterController = require('../controllers/dokterController');

router.post('/', dokterController.addDokter, (req, res) => {
    res.status(201).json(req.createdDokter);
});

router.get('/', dokterController.getAllDokter, (req, res) => {
    res.status(201).json(req.getAllDokter);
});

router.get('/spesialisasi', dokterController.getAllSpesialisasi);

router.get('/:id_dokter', dokterController.getDokterById, (req, res) => {
    res.status(201).json(req.getDokterById);
});

router.put('/:id_dokter', dokterController.updateDokter, (req, res) => {
    res.status(201).json(req.updateDokter);
});

router.delete('/:id_dokter', dokterController.deleteDokter, (req, res) => {
    res.status(201).json(req.deleteDokter);
});


module.exports = router;