const dokterService = require('../services/dokterService');

async function addData(req, res, next) {
    let { nama_dokter, spesialisasi, nomor_telepon, jadwal_praktek } = req.body;

    if (!nama_dokter || !spesialisasi || !nomor_telepon || !jadwal_praktek)
        return res.status(400).json({ error: 'All fields must filled' });

    
}