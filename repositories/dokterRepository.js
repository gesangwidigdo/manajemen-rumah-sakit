const db = require('../config/db.config');

const insertDokter = async (dokter) => {
    const [result] = await db.execute(
        'INSERT INTO dokter (nama_dokter, spesialisasi, nomor_telepon, jadwal_praktek) VALUES (?, ?, ?, ?)',
        [dokter.nama_dokter, dokter.spesialisasi, dokter.nomor_telepon, dokter.jadwal_praktek]
    );
    return result;
};

const getAllDokter = async () => {
    const [result] = await db.execute(
        'SELECT id_dokter, nama_dokter, spesialisasi, nomor_telepon, jadwal_praktek FROM dokter'
    );
    return result;
}

const getDokterById = async (id_dokter) => {
    const [result] = await db.execute(
        'SELECT id_dokter, nama_dokter, spesialisasi, nomor_telepon, jadwal_praktek \
        FROM dokter \
        WHERE id_dokter = ?',
        [id_dokter]
    );
    return result;
}

const updateDokter = async (id_dokter, dokter) => {
    const [result] = await db.execute(
        `
        UPDATE dokter
        SET nama_dokter = ?, spesialisasi = ?, nomor_telepon = ?, jadwal_praktek = ?
        WHERE id_dokter = ?
        `,
        [dokter.nama_dokter, dokter.spesialisasi, dokter.nomor_telepon, dokter.jadwal_praktek, id_dokter]
    );
}

const deleteDokter = async (id_dokter) => {
    const [result] = await db.execute(
        `
        DELETE FROM dokter WHERE id_dokter = ?
        `,
        [id_dokter]
    );
    return result;
}

module.exports = {
    insertDokter,
    getAllDokter,
    getDokterById,
    updateDokter,
    deleteDokter
}