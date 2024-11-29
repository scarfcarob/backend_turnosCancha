

import pool from '../config/db.js';

const Horario = {
  async getAll() {
    const [rows] = await pool.query('SELECT * FROM horarios');
    return rows;
  },

  async getById(id) {
    const [rows] = await pool.query('SELECT * FROM horarios WHERE id = ?', [id]);
    return rows[0];
  },

  async create({ cancha_id, fecha, hora_inicio, hora_fin }) {
    const sql = `INSERT INTO horarios (cancha_id, fecha, hora_inicio, hora_fin)
      VALUES (?, ?, ?, ?)`;
    const [result] = await pool.query(sql, [cancha_id, fecha, hora_inicio, hora_fin]);
    return result.insertId;
  },

  async update(id, data) {
    const fields = Object.keys(data).map(key => `${key} = ?`).join(', ');
    const values = Object.values(data);
    const sql = `UPDATE horarios SET ${fields} WHERE id = ?`;
    const [result] = await pool.query(sql, [...values, id]);
    return result.affectedRows > 0;
  },

  async delete(id) {
    const [result] = await pool.query('DELETE FROM horarios WHERE id = ?', [id]);
    return result.affectedRows > 0;
  },
};

export default Horario;
