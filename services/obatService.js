const { update } = require('../repositories/dokterRepository');
const obatRepository = require('../repositories/obatRepository');

const getAllData = async () => {
    return await obatRepository.getAll();
};

const getDataById = async (id_obat) => {
    return await obatRepository.getById(id_obat);
};

const insertData = async (obat) => {
    return await obatRepository.insert(obat);
};

const updateData = async (id_obat, obat) => {
    return await obatRepository.update(id_obat, obat);
};

const updateStokObat = async (id_obat, stokObat) => {
    return await obatRepository.updateStok(id_obat, stokObat);
}

module.exports = {
    getAllData,
    getDataById,
    insertData,
    updateData,
    updateStokObat,
};