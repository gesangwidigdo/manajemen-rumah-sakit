const db = require('../config/db.config');

const getAllPasien = async () => {
    const [result] = await db.execute(
        'SELECT id_pasien, nama, tanggal_lahir, jenis_kelamin, alamat, nomor_telepon, asuransi FROM pasien'
    );
    return result;
};

const getPasienById = async (id_pasien) => {
    const [result] = await db.execute(
        'SELECT id_pasien, nama, tanggal_lahir, jenis_kelamin, alamat, nomor_telepon, asuransi FROM pasien WHERE id_pasien = ?',
        [id_pasien]
    );
    return result;
}

module.exports = {
    getAllPasien,
    getPasienById,
};