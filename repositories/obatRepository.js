const db = require('../config/db.config');

const getAll = async () => {
    const [result] = await db.execute(
        'SELECT nama_obat, deskripsi, stok, harga FROM obat'
    );
    return result;
};

const getById = async (id_obat) => {
    const [result] = await db.execute(
        `SELECT nama_obat, deskripsi, stok, harga 
        FROM obat
        WHERE id_obat = ?`,
        [id_obat]
    );
    return result;
};

const insert = async (obat) => {
    const [result] = await db.execute(
        `INSERT INTO obat (nama_obat, deskripsi, stok, harga)
        VALUES (?, ?, ?, ?)`,
        [obat.nama_obat, obat.deskripsi, obat.stok, obat.harga]
    );
    return result;
};

const update = async (id_obat, obat) => {
    const [result] = await db.execute(
        `UPDATE obat
        SET nama_obat = ?, deskripsi = ?, stok = ?, harga = ?
        WHERE id_obat = ?`,
        [obat.nama_obat, obat.deskripsi, obat.stok, obat.harga, id_obat]
    );
    return result;
};

const updateStok = async (id_obat, stokObat) => {
    const [result] = await db.execute(
        'CALL update_stok_obat(?, ?)',
        [id_obat, stokObat]
    );
    return result;
}

module.exports = {
    getAll,
    getById,
    insert,
    update,
    updateStok,
};