
// Validaciones para horarios

export const validateHorarios = [
    body("canchaId")
        .isInt()
        .withMessage("El ID de la cancha debe ser un número entero"),
    body("horaInicio")
        .notEmpty()
        .withMessage("La hora de inicio es obligatoria"),
    body("horaFin")
        .notEmpty()
        .withMessage("La hora de fin es obligatoria"),
    ];
