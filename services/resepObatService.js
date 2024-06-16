const obatResepRepository = require('../repositories/resepObatRepository');

const getAllData = async () => {
    return await obatResepRepository.getAll();
};

const getDataByIdResep = async (id_resep) => {
    return await obatResepRepository.getByIdResep(id_resep);
};

module.exports = {
    getAllData,
    getDataByIdResep,
};