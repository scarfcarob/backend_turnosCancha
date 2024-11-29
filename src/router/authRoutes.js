
import { Router } from "express";
import { verifyToken, requireRole } from "../middleware/authMiddleware.js"; // (verifica token y pide roles-Importa los middlewares)

const router = Router();

// Ruta privada protegida por el middleware verifyToken

router.get("/private", verifyToken, (req, res) => {
    res.json({ message: "Bienvenido a la ruta privada" });
});

// Ruta protegida por el middleware verifyToken y restrictiva por el rol

router.post("/admin", [verifyToken, requireRole("admin")], (req, res) => {
    res.json({ message: "Bienvenido, administrador" });
});

export default router;




