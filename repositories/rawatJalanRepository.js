const db = require('../config/db.config');

const getAll = async () => {
    const [result] = await db.execute(
        'SELECT * FROM rawat_jalan'
    );
    return result;
};

const getById = async (id_rawat_jalan) => {
    const [result] = await db.execute(
        'SELECT * FROM rawat_jalan WHERE id_rawat_jalan = ?',
        [id_rawat_jalan]
    );
    return result
};

const checkId = async (id_pasien) => {
    const [result] = await db.execute(
        'SELECT cek_id_pasien(?) AS cekIdRes',
        [id_pasien]
    );
    return result[0].cekIdRes;
}

const insert = async (rawat_jalan) => {
    const [result] = await db.execute(
        'CALL add_rawat_jalan(?, ?, ?, ?, ?, ?, ?)',
        [
            rawat_jalan.status, 
            rawat_jalan.tanggal_diperiksa, 
            rawat_jalan.diagnosis, 
            rawat_jalan.pasien_id_pasien, 
            rawat_jalan.dokter_id_dokter, 
            rawat_jalan.resep_id_resep, 
            rawat_jalan.pembayaran_id_pembayaran
        ]
    );
    return result;
}

const update = async (id_rawat_jalan, rawat_jalan) => {
    const [result] = await db.execute(
        'CALL update_rawat_jalan(?, ?, ?, ?, ?, ?, ?, ?)',
        [
            id_rawat_jalan,
            rawat_jalan.status, 
            rawat_jalan.tanggal_diperiksa, 
            rawat_jalan.diagnosis, 
            rawat_jalan.pasien_id_pasien, 
            rawat_jalan.dokter_id_dokter, 
            rawat_jalan.resep_id_resep, 
            rawat_jalan.pembayaran_id_pembayaran
        ]
    );
    return result;
}

module.exports = {
    getAll,
    getById,
    insert,
    update,
    checkId,
};