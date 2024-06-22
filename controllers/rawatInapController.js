const rawatInapService = require('../services/rawatInapService');
const utilService = require('../services/utilService');

const getAllRawatInap = async (req, res, next) => {
    try {
        const result = await rawatInapService.getAllData();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getRawatInapById = async (req, res, next) => {
    const { id_rawat_inap } = req.params;

    try {
        const result = await rawatInapService.getDataById(id_rawat_inap);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

const addRawatInap = async (req, res, next) => {
    const { nomor_kamar, status, tanggal_masuk, tanggal_keluar, diagnosis, pasien_id_pasien, dokter_id_dokter, resep_id_resep, pembayaran_id_pembayaran } = req.body;

    if (!nomor_kamar || !status || !tanggal_masuk || !tanggal_keluar || !diagnosis || !pasien_id_pasien || !dokter_id_dokter || !resep_id_resep || !pembayaran_id_pembayaran) {
        res.status(400).json({ error: 'All fields must filled' });
    }
    
    try {
        const rawat_inap = { nomor_kamar, status, tanggal_masuk, tanggal_keluar, diagnosis, pasien_id_pasien, dokter_id_dokter, resep_id_resep, pembayaran_id_pembayaran };

        const checkIdResult = await utilService.checkIdPasien(rawat_inap.pasien_id_pasien);
        const checkIdResVal = checkIdResult;
        
        if (checkIdResVal) {
            const result = await rawatInapService.addData(rawat_inap);
            res.status(200).json({ success: true, data: rawat_inap });
        } else {
            res.status(404).json({ success: false, error: 'id_pasien not registered yet' });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

const updateRawatInap = async (req, res, next) => {
    const { nomor_kamar, status, tanggal_masuk, tanggal_keluar, diagnosis, pasien_id_pasien, dokter_id_dokter, resep_id_resep, pembayaran_id_pembayaran } = req.body;
    const { id_rawat_inap } = req.params;

    if (!nomor_kamar, !status, !tanggal_masuk, !tanggal_keluar, !diagnosis, !pasien_id_pasien, !dokter_id_dokter, !resep_id_resep, !pembayaran_id_pembayaran) {
        res.status(400).json({ error: 'All fields must filled' });
    }

    try {
        const rawat_inap = { nomor_kamar, status, tanggal_masuk, tanggal_keluar, diagnosis, pasien_id_pasien, dokter_id_dokter, resep_id_resep, pembayaran_id_pembayaran };
        const result = await rawatInapService.updateData(id_rawat_inap, rawat_inap);
        res.status(200).json({ success: true, message: 'Success Updating Data', data: rawat_inap });
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    getAllRawatInap,
    getRawatInapById,
    addRawatInap,
    updateRawatInap,
};