
import Reserva from '../model/reservas.js';

const ReservaController = {
  async getAll(req, res) {
    try {
      const reservas = await Reserva.getAll();
      res.json(reservas);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las reservas' });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const reserva = await Reserva.getById(id);
      if (!reserva) return res.status(404).json({ error: 'Reserva no encontrada' });
      res.json(reserva);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la reserva' });
    }
  },

  async create(req, res) {
    try {
      const { usuario_id, horario_id, estado } = req.body;
      const id = await Reserva.create({ usuario_id, horario_id, estado });
      res.status(201).json({ id });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la reserva' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const actualizado = await Reserva.update(id, req.body);
      if (!actualizado) return res.status(404).json({ error: 'Reserva no encontrada' });
      res.json({ message: 'Reserva actualizada correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la reserva' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const eliminado = await Reserva.delete(id);
      if (!eliminado) return res.status(404).json({ error: 'Reserva no encontrada' });
      res.json({ message: 'Reserva eliminada correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la reserva' });
    }
  },
};

export default ReservaController;
