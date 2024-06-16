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
}

module.exports = {
    getAllResepObat,
    getResepObatByIdResep,
};