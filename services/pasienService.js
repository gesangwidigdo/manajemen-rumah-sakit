const pasienRepository = require('../repositories/pasienRepository');

const getAllData = async () => {
    return await pasienRepository.getAll();
};

const getDataById = async (id_pasien) => {
    return await pasienRepository.getById(id_pasien);
}

const insertData = async (pasien) => {
    return await pasienRepository.insert(pasien);
}

module.exports = {
    getAllData,
    getDataById,
    insertData,
};