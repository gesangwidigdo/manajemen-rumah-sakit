const dokterRepository = require('../repositories/dokterRepository');

const insertData = async (dokter) => {
    return await dokterRepository.insert(dokter);
};

const getAllData = async () => {
    return await dokterRepository.getAll();
}

const getDataById = async (id_dokter) => {
    return await dokterRepository.getById(id_dokter);
}

const updateData = async (id_dokter, dokter) => {
    return await dokterRepository.update(id_dokter, dokter);
}

const deleteData = async (id_dokter) => {
    return await dokterRepository.remove(id_dokter);
}

const getAllSpesial = async () => {
    return await dokterRepository.spesialisasi();
}

module.exports = {
    insertData,
    getAllData,
    getDataById,
    updateData,
    deleteData,
    getAllSpesial,
}