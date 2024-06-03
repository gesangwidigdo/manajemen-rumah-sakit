const dokterService = require('../services/dokterService');

const addData = async (req, res, next)  => {
    let { nama_dokter, spesialisasi, nomor_telepon, jadwal_praktek } = req.body;

    if (!nama_dokter || !spesialisasi || !nomor_telepon || !jadwal_praktek)
        return res.status(400).json({ error: 'All fields must filled' });

    try {
        const dokter = { nama_dokter, spesialisasi, nomor_telepon, jadwal_praktek };
        const result = await dokterService.createDokter(dokter);
        req.createdDokter = { id: result.insertId, ...dokter };
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addData,
}