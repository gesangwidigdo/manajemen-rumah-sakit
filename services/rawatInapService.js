const rawatInapRepository = require('../repositories/rawatInapRepository');

const getAllData = async () => {
    return await rawatInapRepository.getAll();
}

const getDataById = async (id_rawat_inap) => {
    return await rawatInapRepository.getById(id_rawat_inap);
}

const addData = async (rawat_inap) => {
    return await rawatInapRepository.insert(rawat_inap);
}

const updateData = async (id_rawat_inap, rawat_inap) => {
    return await rawatInapRepository.update(id_rawat_inap, rawat_inap);
}

module.exports = {
    getAllData,
    getDataById,
    addData,
    updateData,
};