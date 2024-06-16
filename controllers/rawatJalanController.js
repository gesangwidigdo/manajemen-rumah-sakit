const rawatJalanService = require('../services/rawatJalanService');

const getAllRawatJalan = async (req, res, next) => {
    try {
        const result = await rawatJalanService.getAllData();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getRawatJalanById = async (req, res, next) => {
    const { id_rawat_jalan } = req.params;

    try {
        const result = await rawatJalanService.getDataById(id_rawat_jalan);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

const addRawatJalan = async (req, res, next) => {
    const { status, tanggal_diperiksa, diagnosis, pasien_id_pasien, dokter_id_dokter, resep_id_resep, pembayaran_id_pembayaran } = req.body;

    if (!status || !tanggal_diperiksa || !diagnosis || !pasien_id_pasien || !dokter_id_dokter || !resep_id_resep || !pembayaran_id_pembayaran) {
        res.status(400).json({ error: 'All fields must filled' });
    }
    
    try {
        const rawat_jalan = { status, tanggal_diperiksa, diagnosis, pasien_id_pasien, dokter_id_dokter, resep_id_resep, pembayaran_id_pembayaran };
        const result = await rawatJalanService.addData(rawat_jalan);
        res.status(200).json({ success: true, data: rawat_jalan });
    } catch (error) {
        res.status(500).json(error);
    }
};

const updateRawatJalan = async (req, res, next) => {
    const { status, tanggal_diperiksa, diagnosis, pasien_id_pasien, dokter_id_dokter, resep_id_resep, pembayaran_id_pembayaran } = req.body;
    const { id_rawat_jalan } = req.params;

    if (!status || !tanggal_diperiksa || !diagnosis || !pasien_id_pasien || !dokter_id_dokter || !resep_id_resep || !pembayaran_id_pembayaran) {
        res.status(400).json({ error: 'All fields must filled' });
    }
    
    try {
        const rawat_jalan = { status, tanggal_diperiksa, diagnosis, pasien_id_pasien, dokter_id_dokter, resep_id_resep, pembayaran_id_pembayaran };
        const result = await rawatJalanService.updateData(id_rawat_jalan, rawat_jalan);
        res.status(200).json({ success: true, message: 'Success Updating Data', data: rawat_jalan });
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    getAllRawatJalan,
    getRawatJalanById,
    addRawatJalan,
    updateRawatJalan,
};