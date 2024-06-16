const resepObatService = require('../services/resepObatService');

const getAllResepObat = async (req, res, next) => {
    try {
        const result = await resepObatService.getAllData();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getResepObatByIdResep = async (req, res, next) => {
    const { id_resep } = req.params;

    try {
        const result = await resepObatService.getDataByIdResep(id_resep);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

const addResepObat = async (req, res, next) => {
    const { kuantitas, obat_id_obat, resep_id_resep } = req.body;

    try {
        const resepObat = { kuantitas, obat_id_obat, resep_id_resep };
        const result = await resepObatService.addData(resepObat);
        res.status(200).json({ success: true, data: resepObat });
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    getAllResepObat,
    getResepObatByIdResep,
    addResepObat,
};