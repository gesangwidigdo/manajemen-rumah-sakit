const obatService = require('../services/obatService');

const getAllObat = async (req, res, next) => {
    try {
        const result = await obatService.getAllData();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getObatById = async (req, res, next) => {
    const { id_obat } = req.params;

    try {
        const result = await obatService.getDataById(id_obat);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

const addObat = async (req, res, next) => {
    const { nama_obat, deskripsi, stok, harga } = req.body;
    
    if (!nama_obat || !deskripsi || !stok || !harga) {
        res.status(400).json({ error: 'All field must filled' });
    }

    try {
        const obat = { nama_obat, deskripsi, stok, harga };
        const result = await obatService.insertData(obat);
        res.status(200).json({ success: true, id: result.insertId, data: obat });
    } catch (error) {
        res.status(500).json(error);
    }
}

const updateObat = async (req, res, next) => {
    const { nama_obat, deskripsi, stok, harga } = req.body;
    const { id_obat } = req.params;

    if (!nama_obat || !deskripsi || !stok || !harga) {
        res.status(400).json({ error: 'All field must filled' });
    }

    try {
        const obat = { nama_obat, deskripsi, stok, harga };
        const result = await obatService.updateData(id_obat, obat);
        res.status(200).json({ success: true, message: 'Success Updating Data', data: obat });
    } catch (error) {
        res.status(500).json(error);
    }
};

const updateStokObat = async (req, res, next) => {
    const { stok } = req.body;
    const { id_obat } = req.params;

    if (!stok) {
        res.status(400).json({ error: 'Stok field must filled' });
    }

    try {
        const stokObat = stok;
        // console.log(stokObat);
        const result = await obatService.updateStokObat(id_obat, stokObat);
        res.status(200).json({ success: true, message: 'Success Updating Data', data: stokObat });
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    getAllObat,
    getObatById,
    addObat,
    updateObat,
    updateStokObat,
}