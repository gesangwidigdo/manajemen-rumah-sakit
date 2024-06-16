const db = require('../config/db.config');

const getAll = async () => {
    const [result] = await db.execute(
        'SELECT * FROM obat_resep'
    );
    return result;
};

module.exports = {
    getAll,
};