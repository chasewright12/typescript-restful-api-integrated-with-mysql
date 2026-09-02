// Database configuration file for the backend of the RESTful API project
import mysql, { Pool, PoolOptions } from 'mysql2/promise';

const dbConfig: PoolOptions = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'my_database',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};

const pool: Pool = mysql.createPool(dbConfig);

export async function testConnection(): Promise<void> {
    try {
        const connection = await pool.getConnection();
        console.log('Database connection established successfully.');
        connection.release();
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
}

export default pool;