
import jwt from "jsonwebtoken";

// Middleware para verificar que el usuario ha enviado un token JWT valido

const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) {
    return res.status(403).json({ error: "No se proporcionó un token" });
    }

    try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verificar token
    req.user = decoded; // Agregar datos del usuario al objeto req
    next();
    } catch (error) {
    return res.status(401).json({ error: "Token inválido o expirado" });
    }
};

// Middleware para roles específicos (opcional - asegura que el usuario tenga un rol especifico antes de permitir el acceso)

const requireRole = (role) => {
    return (req, res, next) => {
    if (req.user?.role !== role) {
        return res.status(403).json({ error: "No tienes permisos para esta acción" });
    }
    next();
    };
};

export { verifyToken, requireRole };  



































//import jwt from "jsonwebtoken";

// Middleware para verificar el token

//export const verifyToken = (req, res, next) => {
    //const token = req.headers["authorization"]?.split(" ")[1];

    //if (!token) {
    //return res.status(403).json({ error: "No se proporcionó un token" });
    //}

    //try {
    //const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //req.user = decoded; // Añade la información del usuario al request
    //next();
    //} catch (error) {
    //return res.status(401).json({ error: "Token inválido o expirado" });
    //}
//};








