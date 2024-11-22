
import db from '../config/db.js';

const Reserva = {
  async getAll() {
    const [rows] = await db.query(`
      SELECT r.*, u.nombre AS usuario, c.nombre AS cancha, h.fecha, h.hora_inicio, h.hora_fin
      FROM reservas r
      JOIN usuarios u ON r.usuario_id = u.id
      JOIN horarios h ON r.horario_id = h.id
      JOIN canchas c ON h.cancha_id = c.id
    `);
    return rows;
  },

  async getById(id) {
    const [rows] = await db.query(`
      SELECT r.*, u.nombre AS usuario, c.nombre AS cancha, h.fecha, h.hora_inicio, h.hora_fin
      FROM reservas r
      JOIN usuarios u ON r.usuario_id = u.id
      JOIN horarios h ON r.horario_id = h.id
      JOIN canchas c ON h.cancha_id = c.id
      WHERE r.id = ?
    `, [id]);
    return rows[0];
  },

  async create({ usuario_id, horario_id, estado }) {
    const sql = `
      INSERT INTO reservas (usuario_id, horario_id, estado)
      VALUES (?, ?, ?)
    `;
    const [result] = await db.query(sql, [usuario_id, horario_id, estado]);
    return result.insertId;
  },

  async update(id, data) {
    const fields = Object.keys(data).map(key => `${key} = ?`).join(', ');
    const values = Object.values(data);
    const sql = `UPDATE reservas SET ${fields} WHERE id = ?`;
    const [result] = await db.query(sql, [...values, id]);
    return result.affectedRows > 0;
  },

  async delete(id) {
    const [result] = await db.query('DELETE FROM reservas WHERE id = ?', [id]);
    return result.affectedRows > 0;
  },
};

export default Reserva;






