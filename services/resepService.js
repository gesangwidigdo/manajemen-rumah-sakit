const resepRepository = require('../repositories/resepRepository');

const getAllData = async () => {
    return await resepRepository.getAll();
};

const addData = async () => {
    return await resepRepository.insert();
}

module.exports = {
    getAllData,
    addData,
};