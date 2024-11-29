
import express from 'express';

import authRoutes from "./router/authRoutes.js"; //importe ruta de autenticacion (token y rol)


const app = express();

// Importa las rutas
import usuarioRoutes from './router/usuariosRoutes.js';
import canchasRoutes from './router/canchasRoutes.js';
import horarioRoutes from './router/horariosRoutes.js';
import reservaRoutes from './router/reservasRoutes.js';
import pagoRoutes from './router/pagosRoutes.js';



// Middleware global
app.use(express.json());


// Rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/canchas', canchasRoutes);
app.use('/api/horarios', horarioRoutes);
app.use('/api/reservas', reservaRoutes);
app.use('/api/pagos', pagoRoutes);

// Rutas protegidas
app.use("/api/auth", authRoutes);
app.use("/api/usuarios", usuarioRoutes);

export default app;

