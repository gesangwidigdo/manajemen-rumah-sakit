const express = require('express');
const router = express.Router();
const rawatInapController = require('../controllers/rawatInapController');

router.get('/', rawatInapController.getAllRawatInap);
router.get('/:id_rawat_inap', rawatInapController.getRawatInapById);
router.post('/', rawatInapController.addRawatInap);
router.put('/:id_rawat_inap', rawatInapController.updateRawatInap);

module.exports = router;