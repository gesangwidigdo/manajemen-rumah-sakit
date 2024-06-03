const dokterRepository = require('../repositories/dokterRepository');

const createDokter = async (dokter) => {
    return await dokterRepository.insertDokter(dokter);
};

module.exports = {
    createDokter,
}