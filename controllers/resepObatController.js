const resepObatService = require('../services/resepObatService');

const getAllResepObat = async (req, res, next) => {
    try {
        const result = await resepObatService.getAllData();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    getAllResepObat,
};