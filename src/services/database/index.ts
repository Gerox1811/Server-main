import mysql from 'mysql2/promise';
import 'dotenv/config'

const connection = mysql.createConnection({
    host: process.env.IA_DB_HOST,
    user: process.env.IA_DB_USER,
    password: process.env.IA_DB_PASS,
    database: process.env.IA_DB_NAME,
    port: Number(process.env.IA_DB_PORT),
    waitForConnections: true,
});

export default connection;