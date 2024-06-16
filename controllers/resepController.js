const resepService = require('../services/resepService');

const getAllResep = async (req, res, next) => {
    try {
        const result = await resepService.getAllData();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

const addResep = async (req, res, next) => {
    try {
        const result = await resepService.addData();
        res.status(200).json({ success: true, result});
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    getAllResep,
    addResep,
};