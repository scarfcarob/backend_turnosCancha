
// Validaciones para pagos

export const validatePagos = [
    body("monto")
        .isNumeric()
        .withMessage("El monto debe ser un número"),
    body("metodo")
        .notEmpty()
        .withMessage("El método de pago es obligatorio"),
    ];

