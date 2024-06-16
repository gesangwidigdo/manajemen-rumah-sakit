const db = require('../config/db.config');

const getAll = async () => {
    const [result] = await db.execute(
        'SELECT * FROM resep'
    );
    return result;
};

const insert = async () => {
    const [result] = await db.execute(
        'CALL add_resep()'
    );
    return result;
};

module.exports = {
    getAll,
    insert,
};