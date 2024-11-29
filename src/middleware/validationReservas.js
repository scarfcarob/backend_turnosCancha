
// Validaciones para reservas

export const validateReservas = [
    body("usuarioId")
        .isInt()
        .withMessage("El ID del usuario debe ser un número entero"),
    body("canchaId")
        .isInt()
        .withMessage("El ID de la cancha debe ser un número entero"),
    body("fecha")
        .notEmpty()
        .withMessage("La fecha es obligatoria")
        .isISO8601()
        .withMessage("La fecha debe tener un formato válido (ISO 8601)"),
    ];
