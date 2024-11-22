
import db from '../config/db.js';                  

const Cancha = {
    async create({ nombre, ubicacion, tipo, precio_por_hora }) {
    const sql = `
        INSERT INTO canchas (nombre, ubicacion, tipo, precio_por_hora)
        VALUES (?, ?, ?, ?)
    `;
    const [result] = await db.query(sql, [nombre, ubicacion, tipo, precio_por_hora]);
    return result.insertId;
    },

    async findAll() {
    const sql = `SELECT * FROM canchas`;
    const [rows] = await db.query(sql);
    return rows;
    },

    async findById(id) {
    const sql = `SELECT * FROM canchas WHERE id = ?`;
    const [rows] = await db.query(sql, [id]);
    return rows[0];
    },

    async update(id, { nombre, ubicacion, tipo, precio_por_hora }) {
    const sql = `
        UPDATE canchas
        SET nombre = ?, ubicacion = ?, tipo = ?, precio_por_hora = ?
        WHERE id = ?
    `;
    const [result] = await db.query(sql, [nombre, ubicacion, tipo, precio_por_hora, id]);
    return result.affectedRows > 0;
    },

    async delete(id) {
    const sql = `DELETE FROM canchas WHERE id = ?`;
    const [result] = await db.query(sql, [id]);
    return result.affectedRows > 0;
    },
};

export default Cancha;
