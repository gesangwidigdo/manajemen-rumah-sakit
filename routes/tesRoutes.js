const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('apalah');
});

router.get('/anjay', (req, res) => {
    res.send('anjay');
});

module.exports = router;