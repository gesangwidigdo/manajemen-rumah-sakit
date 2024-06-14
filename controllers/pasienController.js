const pasienService = require('../services/pasienService');

const getAllPasien = async (req, res, next) => {
    try {
        const result = await pasienService.getAllPasien();
        res.status(200).json(result);
    } catch (error) {
        console.log('Error retrieving pasien: ', error);
        next(error);
    }
}

const getPasienById = async (req, res, next) => {
    const { id_pasien } = req.params;

    try {
        const result = await pasienService.getPasienById(id_pasien);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error retrieving pasien: ', error);
        next(error);
    }
}

const addPasien = async (req, res, next) => {
    const { nama, tanggal_lahir, jenis_kelamin, alamat, nomor_telepon, asuransi } = req.body;

    if (!nama || !tanggal_lahir || !jenis_kelamin || !alamat || !nomor_telepon || !asuransi) {
        return res.status(400).json({ error: 'All fields must filled' });
    }

    try {
        const pasien = { nama, tanggal_lahir, jenis_kelamin, alamat, nomor_telepon, asuransi };
        const result = await pasienService.addPasien(pasien);
        res.status(200).json({success: true, id: result.insertId, data: pasien});
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    getAllPasien,
    getPasienById,
    addPasien,
};