const db = require('../config/db.config');

const getAll = async () => {
    const [result] = await db.execute(
        'SELECT * FROM pembayaran'
    );
    return result;
};

const getById = async (id_pembayaran) => {
    const [result] = await db.execute(
        'SELECT * FROM pembayaran WHERE id_pembayaran = ?',
        [id_pembayaran]
    );
    return result;
};

const insert = async (pembayaran) => {
    const [result] = await db.execute(
        'CALL add_pembayaran(?, ?, ?)',
        [pembayaran.biaya, pembayaran.metode_pembayaran, pembayaran.tanggal_pembayaran]
    );
    return result;
}

module.exports = {
    getAll,
    getById,
    insert,
};