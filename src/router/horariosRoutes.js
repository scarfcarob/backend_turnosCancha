
import { Router } from 'express';
import HorarioController from '../controller/horariosController.js';

const router = Router();

router.get('/', HorarioController.getAll);
router.get('/:id', HorarioController.getById);
router.post('/', HorarioController.create);
router.put('/:id', HorarioController.update);
router.delete('/:id', HorarioController.delete);

export default router;
