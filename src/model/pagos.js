

import db from '../config/db.js';

const Pago = {
  async getAll() {
    const [rows] = await db.query(`
      SELECT p.*, r.id AS reserva_id, u.nombre AS usuario, c.nombre AS cancha
      FROM pagos p
      JOIN reservas r ON p.reserva_id = r.id
      JOIN usuarios u ON r.usuario_id = u.id
      JOIN horarios h ON r.horario_id = h.id
      JOIN canchas c ON h.cancha_id = c.id
    `);
    return rows;
  },

  async getById(id) {
    const [rows] = await db.query(`
      SELECT p.*, r.id AS reserva_id, u.nombre AS usuario, c.nombre AS cancha
      FROM pagos p
      JOIN reservas r ON p.reserva_id = r.id
      JOIN usuarios u ON r.usuario_id = u.id
      JOIN horarios h ON r.horario_id = h.id
      JOIN canchas c ON h.cancha_id = c.id
      WHERE p.id = ?
    `, [id]);
    return rows[0];
  },

  async create({ reserva_id, monto, metodo_pago, estado }) {
    const sql = `
      INSERT INTO pagos (reserva_id, monto, metodo_pago, estado)
      VALUES (?, ?, ?, ?)
    `;
    const [result] = await db.query(sql, [reserva_id, monto, metodo_pago, estado]);
    return result.insertId;
  },

  async update(id, data) {
    const fields = Object.keys(data).map(key => `${key} = ?`).join(', ');
    const values = Object.values(data);
    const sql = `UPDATE pagos SET ${fields} WHERE id = ?`;
    const [result] = await db.query(sql, [...values, id]);
    return result.affectedRows > 0;
  },

  async delete(id) {
    const [result] = await db.query('DELETE FROM pagos WHERE id = ?', [id]);
    return result.affectedRows > 0;
  },
};

export default Pago;


