const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const db = require('./config/db.config')

// Load .env
dotenv.config();
const port = 3000;

// Middleware
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const tesRoute = require('./routes/tesRoutes');

// Routes middleware
app.use('/', tesRoute);

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});