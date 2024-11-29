import { Router } from "express";
import { body } from "express-validator";

import { register } from '../controller/usuariosController.js'; // op1: exportación nombrada
//import usuarioController from '../controller/usuariosController.js'; //op2 importar objeto completo

import validateFields from "../middleware/validationMiddleware.js";

const router = Router();

// Validación en una ruta de creación de usuarios

router.post(
    "/register",
    [
    body("username").notEmpty().withMessage("El nombre de usuario es obligatorio"),
    body("email").isEmail().withMessage("Debe ser un email válido"),
    body("password")
        .isLength({ min: 6 })
        .withMessage("La contraseña debe tener al menos 6 caracteres"),
    ],
    validateFields,
    register                       // llama a la funcion register
);

export default router;
