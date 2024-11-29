
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "12345",
    database: process.env.DB_NAME || "bd_alquilercanchas",
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Función para probar la conexión

const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log("Conexión a la base de datos exitosa");
        connection.release();
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
};

// Llamar a la función de prueba
testConnection();

export default pool;