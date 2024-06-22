const rawatJalanRepository = require('../repositories/rawatJalanRepository');

const getAllData = async () => {
    return await rawatJalanRepository.getAll();
}

const getDataById = async (id_rawat_jalan) => {
    return await rawatJalanRepository.getById(id_rawat_jalan);
}

const checkIdPasien = async (id_pasien) => {
    return await rawatJalanRepository.checkId(id_pasien);
}

const addData = async (rawat_jalan) => {
    return await rawatJalanRepository.insert(rawat_jalan);
}

const updateData = async (id_rawat_jalan, rawat_jalan) => {
    return await rawatJalanRepository.update(id_rawat_jalan, rawat_jalan);
}

module.exports = {
    getAllData,
    getDataById,
    addData,
    updateData,
    checkIdPasien,
};