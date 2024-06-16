const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const db = require('./config/db.config')

// Load .env
dotenv.config();
const port = 3000;

// Middleware
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Import routes
const dokterRoute = require('./routes/dokterRoute');
const pasienRoute = require('./routes/pasienRoute');
const obatRoute = require('./routes/obatRoute');
const resepRoute = require('./routes/resepRoute');
const rawatInapRoute = require('./routes/rawatInapRoute');
const pembayaranRoute = require('./routes/pembayaranRoute');
const rawatJalanRoute = require('./routes/rawatJalanRoute');
const resepObatRoute = require('./routes/resepObatRoute');

// Routes middleware
app.use('/dokter', dokterRoute);
app.use('/pasien', pasienRoute);
app.use('/obat', obatRoute);
app.use('/resep', resepRoute);
app.use('/rawat_inap', rawatInapRoute);
app.use('/pembayaran', pembayaranRoute);
app.use('/rawat_jalan', rawatJalanRoute);
app.use('/resep_obat', resepObatRoute);

app.use((error, req, res, next) => {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
});

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});