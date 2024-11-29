
import Usuario from '../model/usuarios.js';    

const UsuarioController = {
    async getAll(req, res) {
    try {
        const usuarios = await Usuario.getAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
    },

    async getById(req, res) {
    try {
        const { id } = req.params;
        const usuario = await Usuario.getById(id);
        if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
    },

    async create(req, res) {
    try {
        const { nombre, email, telefono, tipo, contraseña } = req.body;
        const id = await Usuario.create({ nombre, email, telefono, tipo, contraseña });
        res.status(201).json({ id });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
    },

    async update(req, res) {
    try {
        const { id } = req.params;
        const actualizado = await Usuario.update(id, req.body);
        if (!actualizado) return res.status(404).json({ error: 'Usuario no encontrado' });
        res.json({ message: 'Usuario actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
    },

    async delete(req, res) {
    try {
        const { id } = req.params;
        const eliminado = await Usuario.delete(id);
        if (!eliminado) return res.status(404).json({ error: 'Usuario no encontrado' });
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
    },
};

export default UsuarioController;


//--------------------m:---------------------------------//

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Lógica para crear el usuario
        res.status(201).json({ message: "Usuario registrado exitosamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al registrar el usuario" });
    }
};
