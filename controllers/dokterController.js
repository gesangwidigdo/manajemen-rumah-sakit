const dokterService = require('../services/dokterService');

const addDokter = async (req, res, next)  => {
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

const getAllDokter = async (req, res, next) => {
    try {
        const result = await dokterService.getAllDokter();
        res.status(200).json(result);
    } catch (error) {
        console.error('Error retrieving dokter: ', error);
        next(error);
    }
}

const getDokterById = async (req, res, next) => {
    const { id_dokter } = req.params;
    
    try {
        const result = await dokterService.getDokterById(id_dokter);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error retrieving dokter: ', error);
        next(error);
    }
}

const updateDokter = async (req, res, next) => {
    let { nama_dokter, spesialisasi, nomor_telepon, jadwal_praktek } = req.body;
    const  { id_dokter } = req.params;

    if (!nama_dokter || !spesialisasi || !nomor_telepon || !jadwal_praktek)
        return res.status(400).json({ error: 'All fields must filled' });

    try {
        const dokter = { nama_dokter, spesialisasi, nomor_telepon, jadwal_praktek };
        const result = await dokterService.updateDokter(id_dokter, dokter);
        req.updateDokter = { id: id_dokter, ...dokter };
        next();
    } catch (error) {
        next(error);
    }
}

const deleteDokter = async (req, res, next) => {
    const { id_dokter } = req.params;

    if (!id_dokter) {
        return res.status(400).json({ error: 'id_dokter is required!' });
    }

    try {
        const result = await dokterService.deleteDokter(id_dokter);

        if (result.affectedRows > 0) {
            req.deleteDokter = { message: 'Delete dokter Successfully', id: id_dokter };
            next();
        } else {
            res.status(404).json({ error: 'Dokter not found!' });
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addDokter,
    getAllDokter,
    getDokterById,
    updateDokter,
    deleteDokter
}