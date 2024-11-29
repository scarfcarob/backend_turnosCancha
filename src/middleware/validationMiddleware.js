
import { validationResult } from "express-validator";

// Middleware para manejar errores de validación  // capta los errores de validacion generados 
const validateFields = (req, res, next) => {      // por express-validator y los retorna como respuesta
  const errors = validationResult(req);           // al cliente
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  next();
};

export default validateFields;

