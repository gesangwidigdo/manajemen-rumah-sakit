const db = require('../config/db.config');

const insertDokter = async (dokter) => {
    const [result] = await db.execute(
        'INSERT INTO dokter (nama_dokter, spesialisasi, nomor_telepon, jadwal_praktek) VALUES (?, ?, ?, ?)',
        [dokter.nama_dokter, dokter.spesialisasi, dokter.nomor_telepon, dokter.jadwal_praktek]
    );
    return result;
};

module.exports = {
    insertDokter,
}