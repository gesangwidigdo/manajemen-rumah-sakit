const db = require('../config/db.config');

const checkId = async (id_pasien) => {
    const [result] = await db.execute(
        'SELECT cek_id_pasien(?) AS cekIdRes',
        [id_pasien]
    );
    return result[0].cekIdRes;
}

module.exports = {
    checkId,
};