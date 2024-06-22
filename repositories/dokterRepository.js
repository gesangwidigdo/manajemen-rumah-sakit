const db = require('../config/db.config');

const insert = async (dokter) => {
    const [result] = await db.execute(
        // 'INSERT INTO dokter (nama_dokter, spesialisasi, jadwal, nomor_telepon) VALUES (?, ?, ?, ?)',
        'CALL add_dokter(?, ?, ?, ?)',
        [dokter.nama_dokter, dokter.spesialisasi, dokter.jadwal, dokter.nomor_telepon]
    );
};

const getAll = async () => {
    const [result] = await db.execute(
        'SELECT id_dokter, nama_dokter, spesialisasi, jadwal, nomor_telepon FROM dokter'
    );
    return result;
}

const getById = async (id_dokter) => {
    const [result] = await db.execute(
        'SELECT id_dokter, nama_dokter, spesialisasi, jadwal, nomor_telepon \
        FROM dokter \
        WHERE id_dokter = ?',
        [id_dokter]
    );
    return result;
}

const update = async (id_dokter, dokter) => {
    const [result] = await db.execute(
        `
        UPDATE dokter
        SET nama_dokter = ?, spesialisasi = ?, jadwal = ?, nomor_telepon = ?
        WHERE id_dokter = ?
        `,
        [dokter.nama_dokter, dokter.spesialisasi, dokter.jadwal, dokter.nomor_telepon, id_dokter]
    );
    return result;
}

const remove = async (id_dokter) => {
    const [result] = await db.execute(
        'DELETE FROM dokter WHERE id_dokter = ?',
        [id_dokter]
    );
    return result;
}

const spesialisasi = async () => {
    console.log("ok");
    const [result] = await db.execute(
        'SELECT DISTINCT spesialisasi FROM dokter'
    );
    return result;
}

module.exports = {
    insert,
    getAll,
    getById,
    update,
    remove,
    spesialisasi,
}