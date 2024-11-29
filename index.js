
import app from './src/app.js';


// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});


export default app;

























//--------------------esto me funcionaba antes...................
//import express from 'express';            
//import dotenv from 'dotenv';
//dotenv.config();                     // configurar variable de entorno
//import app from './src/.app.js';
//fijate que aca no te reconoce app en ninguna carpeta, xq esta fuera con index, pero solo asi anda el servidor???

// Middleware para manejo de errores
//app.use((err, req, res, next) => {
    //console.error(err.stack);
    //res.status(500).json({ error: "Algo salió mal en el servidor" });
//});







