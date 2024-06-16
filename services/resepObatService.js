const obatResepRepository = require('../repositories/resepObatRepository');

const getAllData = async () => {
    return await obatResepRepository.getAll();
};

module.exports = {
    getAllData,
};