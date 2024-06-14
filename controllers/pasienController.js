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

module.exports = {
    getAllPasien,
    getPasienById,
};