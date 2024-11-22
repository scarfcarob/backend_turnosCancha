
import 'dotenv/config';                                   // Carga las variables de entorno desde .env
import { createPool } from 'mysql2/promise';

// Configuración de conexión a la base de datos
const configuracion = {
    host: process.env.DB_HOST || '127.0.0.1',            // Dirección del host de la base de datos
    user: process.env.DB_USER || 'root',                 // Usuario de la base de datos
    password: process.env.DB_PASSWORD || '12345',         // Contraseña de la base de datos
    database: process.env.DB_NAME || 'bd_alquilercanchas', // Nombre de la base de datos
    port: process.env.DB_PORT || 3306,                      // Puerto de la base de datos
    waitForConnections: true,                               // Opciones adicionales
    connectionLimit: 10,
    queueLimit: 0
};

// Crear la conexión a la base de datos
const db = createPool(configuracion);

export default db;
