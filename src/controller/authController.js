
import jwt from "jsonwebtoken";

export const generateToken = (user) => {
    const payload = {
    id: user.id,
    email: user.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h", // Token válido por 1 hora
    });

    return token;
};



//-------ejemplo----------------//

//import jwt from "jsonwebtoken";

// Simulando una base de datos
//const usuarios = [
    //{ id: 1, username: "admin", password: "12345", role: "admin" },
    //{ id: 2, username: "user", password: "12345", role: "user" }
//];








