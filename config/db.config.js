const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

let connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "wendy1",
    database: "manajemen_rumah_sakit",
});

// connection.connect((error) => {
//     if (error) console.log(error);
//     else console.log('Connected to database');
// });

module.exports = connection;