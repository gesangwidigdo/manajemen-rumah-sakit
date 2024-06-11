const pasienRepository = require('../repositories/pasienRepository');

const getAllPasien = async () => {
    return await pasienRepository.getAllPasien();
};

module.exports = {
    getAllPasien,
};