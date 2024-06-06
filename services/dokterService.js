const dokterRepository = require('../repositories/dokterRepository');

const createDokter = async (dokter) => {
    return await dokterRepository.insertDokter(dokter);
};

const getAllDokter = async () => {
    return await dokterRepository.getAllDokter();
}

const getDokterById = async (id_dokter) => {
    return await dokterRepository.getDokterById(id_dokter);
}

const updateDokter = async (id_dokter, dokter) => {
    return await dokterRepository.updateDokter(id_dokter, dokter);
}

const deleteDokter = async (id_dokter) => {
    return await dokterRepository.deleteDokter(id_dokter);
}

module.exports = {
    createDokter,
    getAllDokter,
    getDokterById,
    updateDokter,
    deleteDokter
}