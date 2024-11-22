
import Cancha from '../model/canchas.js';

//const app = express();

const CanchaController = {
  async getAll(req, res) {
    try {
      const canchas = await Cancha.getAll();
      res.json(canchas);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las canchas' });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const cancha = await Cancha.getById(id);
      if (!cancha) return res.status(404).json({ error: 'Cancha no encontrada' });
      res.json(cancha);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la cancha' });
    }
  },

  async create(req, res) {
    try {
      const { nombre, ubicacion, precio } = req.body;
      const id = await Cancha.create({ nombre, ubicacion, precio });
      res.status(201).json({ id });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la cancha' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const actualizado = await Cancha.update(id, req.body);
      if (!actualizado) return res.status(404).json({ error: 'Cancha no encontrada' });
      res.json({ message: 'Cancha actualizada correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la cancha' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const eliminado = await Cancha.delete(id);
      if (!eliminado) return res.status(404).json({ error: 'Cancha no encontrada' });
      res.json({ message: 'Cancha eliminada correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la cancha' });
    }
  },
};

export default CanchaController;
