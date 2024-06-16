const db = require('../config/db.config');

const getAll = async () => {
    const [result] = await db.execute(
        'SELECT * FROM obat_resep'
    );
    return result;
};

const getByIdResep = async (id_resep) => {
    const [result] = await db.execute(
        'SELECT * FROM obat_resep WHERE id_resep = ?',
        [id_resep]
    );
    return result;
};

const insert = async (resepObat) => {
    const [result] = await db.execute(
        'CALL add_obat_resep(?, ?, ?)',
        [
            resepObat.obat_id_obat, 
            resepObat.resep_id_resep,
            resepObat.kuantitas,
        ]
    );
    return result;
};

module.exports = {
    getAll,
    getByIdResep,
    insert,
};