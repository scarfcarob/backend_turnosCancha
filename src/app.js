
import express from 'express';
import dotenv from 'dotenv';

dotenv.config(); // Carga las variables de entorno desde .env

const app = express();

// Importa las rutas
import usuarioRoutes from './routes/usuarioRoutes.js';
import canchaRoutes from './routes/canchaRoutes.js';
import horarioRoutes from './routes/horarioRoutes.js';
import reservaRoutes from './routes/reservaRoutes.js';
import pagoRoutes from './routes/pagoRoutes.js';

// Middleware para parsear JSON
app.use(express.json());


// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo salió mal en el servidor' });
});



// Rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/canchas', canchaRoutes);
app.use('/api/horarios', horarioRoutes);
app.use('/api/reservas', reservaRoutes);
app.use('/api/pagos', pagoRoutes);

// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo salió mal en el servidor' });
});

export default app;





















// esto me funcionaba antes:
//import express  from 'express';

//const app = express();
//import dotenv from 'dotenv';


//import usuarioRoutes from './routes/usuarioRoutes.js';
//import canchaRoutes from './routes/canchaRoutes.js';
//import horarioRoutes from './routes/horarioRoutes.js';
//import reservaRoutes from './routes/reservaRoutes.js';
//import pagoRoutes from './routes/pagoRoutes.js';






// Middleware para parsear el cuerpo de las peticiones
//app.use(express.json()); 



//app.use(json());


// Rutas
//app.use('/api/usuarios', usuarioRoutes);
//app.use('/api/canchas', canchaRoutes);
//app.use('/api/horarios', horarioRoutes);
//app.use('/api/reservas', reservaRoutes);
//app.use('/api/pagos', pagoRoutes);


//export default app; 


//--------------------------------------------------------




//dotenv.config();
//const app = express();

// Middlewares
//app.use(express.json());



// Puerto
//const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));















// Ruta para obtener todos los usuarios

//app.get('/usuarios', (req, res) => {
    //res.send([
        //{id: 1, nombre: 'Juan', apellido: 'Perez'},
        //{id: 2, nombre: 'Maria', apellido: 'Garcia'},
        //{id: 3, nombre: 'Pedro', apellido: 'Rodriguez'}
    //]);
//});



