const db = require('../config/db.config');

const getAll = async () => {
    const [result] = await db.execute(
        'SELECT id_pasien, nama, tanggal_lahir, jenis_kelamin, alamat, nomor_telepon, asuransi FROM pasien'
    );
    return result;
};

const getById = async (id_pasien) => {
    const [result] = await db.execute(
        'SELECT id_pasien, nama, tanggal_lahir, jenis_kelamin, alamat, nomor_telepon, asuransi FROM pasien WHERE id_pasien = ?',
        [id_pasien]
    );
    return result;
}

const insert = async (pasien) => {
    const [result] = await db.execute(
        'INSERT INTO pasien (nama, tanggal_lahir, jenis_kelamin, alamat, nomor_telepon, asuransi) VALUES (?, ?, ?, ?, ?, ?)',
        [pasien.nama, pasien.tanggal_lahir, pasien.jenis_kelamin, pasien.alamat, pasien.nomor_telepon, pasien.asuransi]
    );
    return result;
}

module.exports = {
    getAll,
    getById,
    insert,
};