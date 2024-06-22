const utilRepository = require('../repositories/utilRepository');

const checkIdPasien = async (id_pasien) => {
    return await utilRepository.checkId(id_pasien);
}

module.exports = {
    checkIdPasien,
}