const pembayaranService = require('../services/pembayaranService');

const getAllPembayaran = async (req, res, next) => {
    try {
        const result = await pembayaranService.getAllData();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getPembayranById = async (req, res, next) => {
    const { id_pembayaran } = req.params;

    try {
        const result = await pembayaranService.getDataById(id_pembayaran);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

const addPembayaran = async (req, res, next) => {
    const { biaya, metode_pembayaran, tanggal_pembayaran } = req.body;

    if (!biaya || !metode_pembayaran || !tanggal_pembayaran) {
        return res.status(400).json({ error: 'All fields must filled' });
    }

    try {
        const pembayaran = { biaya, metode_pembayaran, tanggal_pembayaran };
        const result = await pembayaranService.addData(pembayaran);
        res.status(200).json({ success: true, data: pembayaran });
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    getAllPembayaran,
    getPembayranById,
    addPembayaran,
};