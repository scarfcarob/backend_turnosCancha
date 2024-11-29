

import pool from '../config/db.js';                      //ES6= IMPORT/EXPORT;

const Usuarios = {
    async getAll() {                                          
    const [rows] = await pool.query('SELECT * FROM usuarios');
    return rows;
    },

    async getById(id) {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
    return rows[0];
    },

    async create({ nombre, email, telefono, tipo, contraseña }) {
    const sql = `INSERT INTO usuarios (nombre, email, telefono, tipo, contraseña) VALUES (?, ?, ?, ?, ?)`;
    const [result] = await pool.query(sql, [nombre, email, telefono, tipo, contraseña]);
    return result.insertId;
    },

    async update(id, { nombre, email, telefono, tipo }) {
    const sql = `UPDATE usuarios
        SET nombre = ?, email = ?, telefono = ?, tipo = ?
        WHERE id = ?`;
    const [result] = await pool.query(sql, [nombre, email, telefono, tipo, id]);
    return result.affectedRows > 0;
    },

    async delete(id) {
    const [result] = await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
    return result.affectedRows > 0;
    },
};


export default Usuarios;