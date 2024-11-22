
import Horario from '../model/horarios.js';

//const app = express();

const HorarioController = {
  async getAll(req, res) {
    try {
      const horarios = await Horario.getAll();
      res.json(horarios);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los horarios' });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const horario = await Horario.getById(id);
      if (!horario) return res.status(404).json({ error: 'Horario no encontrado' });
      res.json(horario);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el horario' });
    }
  },

  async create(req, res) {
    try {
      const { cancha_id, fecha, hora_inicio, hora_fin } = req.body;
      const id = await Horario.create({ cancha_id, fecha, hora_inicio, hora_fin });
      res.status(201).json({ id });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el horario' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const actualizado = await Horario.update(id, req.body);
      if (!actualizado) return res.status(404).json({ error: 'Horario no encontrado' });
      res.json({ message: 'Horario actualizado correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el horario' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const eliminado = await Horario.delete(id);
      if (!eliminado) return res.status(404).json({ error: 'Horario no encontrado' });
      res.json({ message: 'Horario eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el horario' });
    }
  },
};

export default HorarioController;
