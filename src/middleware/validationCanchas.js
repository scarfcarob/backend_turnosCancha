
// Validaciones para canchas

export const validateCanchas = [
    body("nombre")
        .notEmpty()
        .withMessage("El nombre de la cancha es obligatorio"),
    body("ubicacion")
        .notEmpty()
        .withMessage("La ubicación de la cancha es obligatoria"),
    body("precioPorHora")
        .isNumeric()
        .withMessage("El precio por hora debe ser un número"),
    ];
