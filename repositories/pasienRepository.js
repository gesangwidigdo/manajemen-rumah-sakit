const db = require('../config/db.config');

const getAllPasien = async () => {
    const [result] = await db.execute(
        'SELECT id_pasien, nama, tanggal_lahir, jenis_kelamin, alamat, nomor_telepon, asuransi FROM pasien'
    );
    return result;
};

module.exports = {
    getAllPasien,
};