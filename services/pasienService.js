const pasienRepository = require('../repositories/pasienRepository');

const getAllPasien = async () => {
    return await pasienRepository.getAllPasien();
};

const getPasienById = async (id_pasien) => {
    return await pasienRepository.getPasienById(id_pasien);
}

const addPasien = async (pasien) => {
    return await pasienRepository.addPasien(pasien);
}

module.exports = {
    getAllPasien,
    getPasienById,
    addPasien,
};