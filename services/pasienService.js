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

const updateData = async (id_pasien, pasien) => {
    return await pasienRepository.update(id_pasien, pasien);
}

const deleteData = async (id_pasien) => {
    return await pasienRepository.remove(id_pasien);
}

module.exports = {
    getAllData,
    getDataById,
    insertData,
    updateData,
    deleteData,
};